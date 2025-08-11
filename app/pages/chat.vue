<template>
  <div class="flex h-[calc(100vh-62px)] mobile-full-height relative">
    <!-- Mobile Backdrop -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black opacity-75 z-40 lg:hidden"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <div
      class="w-80 bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 flex flex-col fixed lg:relative inset-y-0 left-0 z-50 sidebar-transition"
      :class="{
        'translate-x-0': isSidebarOpen,
        '-translate-x-full lg:translate-x-0': !isSidebarOpen,
      }"
    >
      <!-- Header -->
      <ChatHeader
        :isDark="isDark"
        @toggleDark="toggleDark"
        @closeSidebar="closeSidebar"
        @startNewChat="startNewChat"
      />

      <!-- Chat History -->
      <ChatHistory
        :chatHistory="chatHistory"
        :current_session_key="current_session_key"
        @selectChat="selectChat"
      />
    </div>

    <!-- Main Chat Area -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Mobile Header -->
      <ChatMobileHeader
        :isDark="isDark"
        @openSidebar="openSidebar"
        @toggleDark="toggleDark"
      />

      <!-- Chat Messages -->
      <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 lg:p-6">
        <ChatMessage
          :messages="messages"
          :character_name="channel.character_name"
          :isTyping="isTyping"
        />
      </div>

      <!-- Input Area -->
      <div class="border-t border-gray-200 dark:border-gray-700 p-3 sm:p-4">
        <div class="max-w-4xl mx-auto">
          <form
            @submit.prevent="sendMessage"
            class="flex space-x-2 sm:space-x-4"
          >
            <div class="flex-1">
              <UTextarea
                v-model="inputMessage"
                placeholder="Type your message here..."
                class="w-full text-sm sm:text-base"
                :rows="1"
                :maxrows="4"
                autoresize
                highlight
                size="xl"
                color="neutral"
                :disabled="isTyping"
                @keydown.enter.exact.prevent="sendMessage"
                @keydown.enter.shift.exact="inputMessage += '\n'"
              />
            </div>
            <UButton
              type="submit"
              :size="isMobile ? 'md' : 'lg'"
              color="primary"
              :disabled="!inputMessage.trim() || isTyping"
              :loading="isTyping"
              class="chat-button flex-shrink-0"
            >
              <ClientOnly>
                <Icon name="heroicons:paper-airplane" class="w-4 h-4" />
              </ClientOnly>
              <span class="hidden sm:inline">Send</span>
            </UButton>
          </form>
          <div
            class="text-xs text-zinc-500 dark:text-zinc-400 mt-2 text-center"
          >
            Press Enter to send, Shift+Enter for new line
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted, watch } from "vue";

const runtimeConfig = useRuntimeConfig();

// Template refs
const chatContainer = ref(null);

// State
const channel = ref({
  user_id: "bc8fd0be-0160-4b99-8d7c-8435282c6830",
  character_id: "ac6284f7-32f2-4e0d-b55e-49a367df7a00",
  user_name: "Gin",
  character_name: "hana_v1",
  version: "0",
});
const inputMessage = ref("");
const messages = ref([]);
const isTyping = ref(false);
const chatHistory = ref([]);
const current_session_key = ref("");
const isSidebarOpen = ref(false);

// Responsive
const isMobile = computed(() => {
  if (process.client) {
    return window.innerWidth < 1024;
  }
  return false;
});

// Dark mode
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value == "dark");

const toggleDark = () => {
  colorMode.preference = colorMode.value == "dark" ? "light" : "dark";
};

// Sidebar management
const openSidebar = () => {
  isSidebarOpen.value = true;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const fetchChat = async (payload) => {
  const n8nURL = runtimeConfig.public.n8nURL;
  const res = await $fetch(n8nURL, {
    method: "POST",
    body: payload,
  });

  if (!res || !res.content) {
    throw new Error("Failed to fetch chat response");
  }

  return res;
};

// Message handling
const sendMessage = async () => {
  const message = inputMessage.value.trim();
  if (!message || isTyping.value) return;

  // Add user message
  await addMessage({
    session_id: current_session_key.value,
    role: "user",
    content: message,
    created_at: new Date(),
  });
  inputMessage.value = "";

  // Show typing indicator
  isTyping.value = true;
  await nextTick();
  scrollToBottom();

  // Simulate AI response (replace with actual AI API call)
  const outputMessage = await fetchChat({
    user_id: channel.value.user_id,
    character_id: channel.value.character_id,
    session_key: current_session_key.value,
    message: message,
  });
  console.log(messages.value[messages.value.length - 1]);

  // messages.value[messages.value.length - 1].session_id = outputMessage.session_id; // Update last user message
  setTimeout(() => {
    addMessage({
      session_id: outputMessage.session_id,
      role: "assistant",
      content: outputMessage.content,
      created_at: outputMessage.created_at,
    });
    isTyping.value = false;

    // Update chat history
    updateChatHistory(current_session_key.value);

    nextTick(() => {
      scrollToBottom();
    });
  }, 1000);
};

const addMessage = ({ session_id, role, content, created_at }) => {
  const message = {
    session_id,
    role,
    content,
    created_at,
  };
  messages.value.push(message);
  return message;
};

// Chat management
const startNewChat = () => {
  messages.value = [];
  current_session_key.value = null;
  inputMessage.value = "";
  // Close sidebar on mobile after creating new chat
  if (isMobile.value) {
    closeSidebar();
  }

  // ดึงบทสนทนาเริ่มต้นมาจาก AI
  channel.value.version++;
  const session_key = `ses_${channel.value.user_name}_${channel.value.character_name}_ver_${channel.value.version}`;
  getFirstMessageConversation(session_key);
  console.log("Starting new chat, fetching first message from AI...");
};

const getFirstMessageConversation = async (session_key) => {
  const outputMessage = await fetchChat({
    user_id: channel.value.user_id,
    character_id: channel.value.character_id,
    session_key: session_key,
    message: "",
  });

  console.log("Initial AI Response:", outputMessage);

  await addMessage({
    session_id: outputMessage.session_id,
    role: "assistant",
    content: outputMessage.content,
    created_at: outputMessage.created_at,
  });

  // Update chat history
  await updateChatHistory(session_key);
};

const selectChat = (chatId) => {
  console.log("Selecting chat:", chatId);

  current_session_key.value = chatId;
  // Load chat messages (implement based on your storage)
  const chat = chatHistory.value.find((c) => c.session_key === chatId);
  if (chat) {
    messages.value = chat.messages || [];
  }
  // Close sidebar on mobile after selecting chat
  if (isMobile.value) {
    closeSidebar();
  }
};

const updateChatHistory = (session_key) => {
  if (messages.value.length === 0) return;

  // const firstUserMessage = messages.value.find((m) => m.role === "user");
  const firstUserMessage = messages.value.length > 0 ? messages.value[0] : null;
  const title = firstUserMessage?.content.slice(0, 50) + "..." || "New Chat";

  if (current_session_key.value && current_session_key.value === session_key) {
    // Update existing chat
    const chatIndex = chatHistory.value.findIndex(
      (c) => c.session_key === current_session_key.value
    );
    if (chatIndex !== -1) {
      chatHistory.value[chatIndex] = {
        ...chatHistory.value[chatIndex],
        title,
        messages: [...messages.value],
        updated_at: new Date(),
      };
    }
  } else {
    // Create new chat
    const newChat = {
      session_key: session_key,
      title,
      messages: [...messages.value],
      created_at: new Date(),
      updated_at: new Date(),
    };
    chatHistory.value.unshift(newChat);
    current_session_key.value = newChat.session_key;
  }
};

const scrollToBottom = () => {
  if (chatContainer.value) {
    nextTick(() => {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    });
  }
};

// Handle window resize for responsive behavior
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isSidebarOpen.value = false; // Reset sidebar state on desktop
  }
};

// Initialize
onMounted(async () => {
  // Load chat history from localStorage if available
  const saved = localStorage.getItem("ai-chat-history");

  if (saved) {
    try {
      chatHistory.value = JSON.parse(saved).map((chat) => ({
        ...chat,
        created_at: chat.created_at ? new Date(chat.created_at) : null,
        updated_at: chat.updated_at ? new Date(chat.updated_at) : null,
        messages: chat.messages.map((msg) => ({
          ...msg,
          created_at: msg.created_at ? new Date(msg.created_at) : null,
        })),
      }));

      // ถ้ามี chatHistory ให้เลือก chat แรก
      if (chatHistory.value.length > 0) {
        current_session_key.value = chatHistory.value[0].session_key;
        messages.value = chatHistory.value[0].messages || [];
        selectChat(current_session_key.value);
      }
    } catch (e) {
      console.warn("Failed to load chat history:", e);
    }
  } else {
    console.log("No chat history found in localStorage.");

    const session_key = `ses_${channel.value.user_name}_${channel.value.character_name}_ver_${channel.value.version}`;
    // getFirstMessageConversation(session_key);
  }

  // Add window resize listener
  window.addEventListener("resize", handleResize);
});

// Cleanup
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

// Save to localStorage when chat history changes
watch(
  chatHistory,
  (newHistory) => {
    localStorage.setItem("ai-chat-history", JSON.stringify(newHistory));
  },
  { deep: true }
);

// Watch for messages changes to auto-scroll
watch(
  messages,
  () => {
    nextTick(() => {
      scrollToBottom();
    });
  },
  { deep: true }
);
</script>
