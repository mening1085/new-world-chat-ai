<template>
  <div class="flex h-screen mobile-full-height relative">
    <!-- Mobile Backdrop -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <div
      class="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col fixed lg:relative inset-y-0 left-0 z-50 sidebar-transition"
      :class="{
        'translate-x-0': isSidebarOpen,
        '-translate-x-full lg:translate-x-0': !isSidebarOpen,
      }"
    >
      <!-- Header -->
      <div class="p-4 border-b border-gray-200 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">
            Kuddy AI Chat
          </h1>
          <div class="flex items-center space-x-2">
            <UButton
              :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
              size="sm"
              color="gray"
              variant="ghost"
              @click="toggleDark()"
            />
            <UButton
              icon="i-heroicons-x-mark"
              size="sm"
              color="gray"
              variant="ghost"
              class="lg:hidden"
              @click="closeSidebar"
            />
          </div>
        </div>
        <UButton
          block
          icon="i-heroicons-plus"
          size="sm"
          color="primary"
          @click="startNewChat"
        >
          New Chat
        </UButton>
      </div>

      <!-- Chat History -->
      <div class="flex-1 overflow-y-auto p-4">
        <div class="space-y-2">
          <div
            v-for="chat in chatHistory"
            :key="chat.id"
            class="p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            :class="{
              'bg-gray-100 dark:bg-gray-700': chat.id === currentChatId,
            }"
            @click="selectChat(chat.id)"
          >
            <div
              class="text-sm font-medium text-gray-900 dark:text-white truncate"
            >
              {{ chat.title }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {{ formatDate(chat.updatedAt) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Chat Area -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Mobile Header -->
      <div
        class="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4"
      >
        <div class="flex items-center justify-between">
          <UButton
            icon="i-heroicons-bars-3"
            size="sm"
            color="gray"
            variant="ghost"
            @click="openSidebar"
          />
          <h1 class="text-lg font-semibold text-gray-900 dark:text-white">
            Kuddy AI Chat
          </h1>
          <UButton
            :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
            size="sm"
            color="gray"
            variant="ghost"
            @click="toggleDark()"
          />
        </div>
      </div>

      <!-- Chat Messages -->
      <div class="flex-1 overflow-y-auto p-4 lg:p-6">
        <div class="max-w-4xl mx-auto">
          <!-- Welcome Message -->
          <div v-if="messages.length === 0" class="text-center py-12">
            <div
              class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <UIcon
                name="i-heroicons-chat-bubble-left-right"
                class="w-8 h-8 text-blue-600 dark:text-blue-400"
              />
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome to Kuddy AI Chat
            </h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Start a conversation with our AI assistant. Ask questions, get
              help, or just chat!
            </p>
          </div>

          <!-- Messages -->
          <div v-else class="space-y-6">
            <div
              v-for="message in messages"
              :key="message.id"
              class="chat-message"
            >
              <!-- User Message -->
              <div v-if="message.role === 'user'" class="flex justify-end">
                <div class="max-w-xs sm:max-w-sm lg:max-w-2xl">
                  <div
                    class="bg-blue-600 text-white rounded-2xl rounded-br-md px-3 py-2 sm:px-4 sm:py-3"
                  >
                    <p class="text-sm">{{ message.content }}</p>
                  </div>
                  <div
                    class="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right"
                  >
                    {{ formatTime(message.timestamp) }}
                  </div>
                </div>
              </div>

              <!-- AI Message -->
              <div v-else class="flex justify-start">
                <div class="max-w-xs sm:max-w-sm lg:max-w-2xl">
                  <div class="flex items-start space-x-2 sm:space-x-3">
                    <div
                      class="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <UIcon
                        name="i-heroicons-cpu-chip"
                        class="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400"
                      />
                    </div>
                    <div
                      class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-md px-3 py-2 sm:px-4 sm:py-3"
                    >
                      <div
                        class="text-sm text-gray-900 dark:text-white message-content"
                        v-html="formatMessage(message.content)"
                      ></div>
                    </div>
                  </div>
                  <div
                    class="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-8 sm:ml-11"
                  >
                    {{ formatTime(message.timestamp) }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Typing Indicator -->
            <div v-if="isTyping" class="flex justify-start">
              <div class="max-w-xs sm:max-w-sm lg:max-w-2xl">
                <div class="flex items-start space-x-2 sm:space-x-3">
                  <div
                    class="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <UIcon
                      name="i-heroicons-cpu-chip"
                      class="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400"
                    />
                  </div>
                  <div
                    class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-bl-md px-3 py-2 sm:px-4 sm:py-3"
                  >
                    <div class="flex space-x-1">
                      <div
                        class="w-2 h-2 bg-gray-400 rounded-full typing-dot"
                      ></div>
                      <div
                        class="w-2 h-2 bg-gray-400 rounded-full typing-dot"
                      ></div>
                      <div
                        class="w-2 h-2 bg-gray-400 rounded-full typing-dot"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                size="xl"
                :disabled="isTyping"
                @keydown.enter.exact.prevent="sendMessage"
                @keydown.enter.shift.exact="inputMessage += '\n'"
              />
            </div>
            <UButton
              type="submit"
              icon="i-heroicons-paper-airplane"
              :size="isMobile ? 'md' : 'lg'"
              color="primary"
              :disabled="!inputMessage.trim() || isTyping"
              :loading="isTyping"
              class="chat-button flex-shrink-0"
            >
              <span class="hidden sm:inline">Send</span>
            </UButton>
          </form>
          <div
            class="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center"
          >
            Press Enter to send, Shift+Enter for new line
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from "vue";

// State
const inputMessage = ref("");
const messages = ref([]);
const isTyping = ref(false);
const chatHistory = ref([]);
const currentChatId = ref(null);
const isSidebarOpen = ref(false);
const  character = ref(
        `ชื่อ: อาเรีย  
คำอธิบาย: นักเรียนปีหนึ่งที่ชาญฉลาด มีความคิดสร้างสรรค์ และชอบเก็บตัว พูดน้อยแต่ใจเด็ด  
คำทักทาย: “สวัสดีค่ะ ฉันชื่ออาเรีย ยินดีที่ได้รู้จักนะ”  
ประวัติ: เด็กนักเรียนจากตระกูลเวทมนตร์เก่าแก่ มีพรสวรรค์ด้านเวทมนตร์ธาตุลมและการร่ายเวทที่ซับซ้อน  
บทบาทผู้ใช้เริ่มต้น: นักเรียนปีหนึ่งที่เพิ่งเข้ามาเรียนในโรงเรียนเวทมนตร์  
รายละเอียดบทบาทผู้ใช้: กำลังค้นหาความลับในโรงเรียนและพยายามปรับตัวให้เข้ากับชีวิตนักเรียนใหม่  
สถานการณ์เริ่มต้น: ห้องสมุดลับของโรงเรียนเวทมนตร์  
รายละเอียดสถานการณ์: ห้องสมุดที่ถูกซ่อนไว้ในมุมลึกสุดของโรงเรียน แสงเทียนอ่อน ๆ ส่องสว่างไปทั่วบริเวณ กลิ่นของหนังสือเก่าและฝุ่นละอองเต็มไปหมด พร้อมเสียงนกฮูกขับขานจากข้างนอก`
      )

// Responsive
const isMobile = computed(() => {
  if (process.client) {
    return window.innerWidth < 1024;
  }
  return false;
});

// Dark mode
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const toggleDark = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

// Sidebar management
const openSidebar = () => {
  isSidebarOpen.value = true;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};

const fetchChat = async (payload) => {
  // Fetch chat history from an API or local storage
  // This is a placeholder function, implement as needed
  const url =
    "https://n8n.kisra.co.th/webhook/098fb852-66e2-47ed-872c-4f10e80f2e5f";
  // const url =
  //   "https://n8n.kisra.co.th/webhook/9a9eaa2b-8cf7-4c4d-8c7b-f58fdb13d949";
  // ses_ + user_id + _ + chat_id + _ + version
  const session_id = "ses_123_cha_1_v_0";
  const res = await $fetch(url, {
    method: "POST",
    body: payload,
  });

  if (!res || !res.output) {
    throw new Error("Failed to fetch chat response");
  }

  return res.output;
};

// Message handling
const sendMessage = async () => {
  const message = inputMessage.value.trim();
  if (!message || isTyping.value) return;

  // Add user message
  await addMessage("user", message);
  inputMessage.value = "";

  // Show typing indicator
  isTyping.value = true;
  await nextTick();
  scrollToBottom();

  // Simulate AI response (replace with actual AI API call)
  const outputMessage = await fetchChat({
    character: character.value,
    messages: message,
  });
  setTimeout(() => {
    addMessage("assistant", outputMessage);
    isTyping.value = false;

    // Update chat history
    updateChatHistory();

    nextTick(() => {
      scrollToBottom();
    });
  }, 1500);
};

const addMessage = (role, content) => {
  const message = {
    id: Date.now(),
    role,
    content,
    timestamp: new Date(),
  };
  messages.value.push(message);
  return message;
};

// Mock AI response generator (replace with actual AI API)
const generateAIResponse = (userMessage) => {
  const responses = [
    `I understand you're asking about "${userMessage}". Let me help you with that! Here's what I think...`,
    `That's an interesting question about "${userMessage}". Based on my knowledge, I can tell you that...`,
    `Thanks for asking about "${userMessage}". I'd be happy to help you understand this better.`,
    `Great question! Regarding "${userMessage}", here's my perspective...`,
    `I appreciate you bringing up "${userMessage}". Let me break this down for you...`,
  ];

  const baseResponse = responses[Math.floor(Math.random() * responses.length)];

  // Add some relevant content based on keywords
  let additionalContent = "";
  if (
    userMessage.toLowerCase().includes("code") ||
    userMessage.toLowerCase().includes("programming")
  ) {
    additionalContent =
      '\n\nHere\'s a simple example:\n```javascript\nfunction hello() {\n  console.log("Hello, World!");\n}\n```';
  } else if (userMessage.toLowerCase().includes("help")) {
    additionalContent =
      "\n\nI'm here to assist you with various topics including:\n• General questions\n• Programming help\n• Explanations and tutorials\n• Creative writing\n• And much more!";
  }

  return baseResponse + additionalContent;
};

// Chat management
const startNewChat = () => {
  messages.value = [];
  currentChatId.value = null;
  inputMessage.value = "";
  // Close sidebar on mobile after creating new chat
  if (isMobile.value) {
    closeSidebar();
  }
};

const selectChat = (chatId) => {
  currentChatId.value = chatId;
  // Load chat messages (implement based on your storage)
  const chat = chatHistory.value.find((c) => c.id === chatId);
  if (chat) {
    messages.value = chat.messages || [];
  }
  // Close sidebar on mobile after selecting chat
  if (isMobile.value) {
    closeSidebar();
  }
};

const updateChatHistory = () => {
  if (messages.value.length === 0) return;

  // const firstUserMessage = messages.value.find((m) => m.role === "user");
  const firstUserMessage = messages.value.length > 0 ? messages.value[0] : null;
  const title = firstUserMessage?.content.slice(0, 50) + "..." || "New Chat";

  if (currentChatId.value) {
    // Update existing chat
    const chatIndex = chatHistory.value.findIndex(
      (c) => c.id === currentChatId.value
    );
    if (chatIndex !== -1) {
      chatHistory.value[chatIndex] = {
        ...chatHistory.value[chatIndex],
        title,
        messages: [...messages.value],
        updatedAt: new Date(),
      };
    }
  } else {
    // Create new chat
    const newChat = {
      id: Date.now(),
      title,
      messages: [...messages.value],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    chatHistory.value.unshift(newChat);
    currentChatId.value = newChat.id;
  }
};

// Utility functions
const formatMessage = (content) => {
  // Enhanced formatting with better line breaks and spacing
  let formatted = content
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /`(.*?)`/g,
      '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>'
    )
    .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>");
  
  // Handle line breaks with proper spacing
  const lines = formatted.split('\n');
  const paragraphs = [];
  let currentParagraph = [];
  
  lines.forEach((line, index) => {
    if (line.trim() === '') {
      // Empty line indicates paragraph break
      if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph.join('<br>'));
        currentParagraph = [];
      }
    } else {
      currentParagraph.push(line);
    }
  });
  
  // Add the last paragraph if it exists
  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph.join('<br>'));
  }
  
  // Wrap each paragraph in p tags with special class for poetic text
  return paragraphs.map((paragraph, index) => {
    const marginClass = index === paragraphs.length - 1 ? 'mb-0' : 'mb-3';
    const hasLineBreaks = paragraph.includes('<br>');
    const poeticClass = hasLineBreaks ? 'poetic-text' : '';
    const isFirstParagraph = index === 0;
    const firstClass = isFirstParagraph ? 'first-paragraph' : '';
    return `<p class="${marginClass} ${poeticClass} ${firstClass}">${paragraph}</p>`;
  }).join('');
};

const formatDate = (date) => {
  const now = new Date();
  const diff = now - date;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  return date.toLocaleDateString();
};

const formatTime = (date) => {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const scrollToBottom = () => {
  const chatContainer = document.querySelector(".overflow-y-auto");
  console.log("Scrolling to bottom", chatContainer);

  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
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
  if (chatHistory.value.length == 0) {
    const outputMessage = await fetchChat({
      character: character.value,
      messages: '',
    });

    console.log("Initial AI Response:", outputMessage);

    await addMessage("assistant", outputMessage);

     // Update chat history
    await updateChatHistory();
  }
  // Load chat history from localStorage if available
  const saved = localStorage.getItem("ai-chat-history");
  if (saved) {
    try {
      chatHistory.value = JSON.parse(saved).map((chat) => ({
        ...chat,
        createdAt: new Date(chat.createdAt),
        updatedAt: new Date(chat.updatedAt),
        messages: chat.messages.map((msg) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        })),
      }));
    } catch (e) {
      console.warn("Failed to load chat history:", e);
    }
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
</script>

<style scoped>
/* Enhanced message formatting */
.chat-message p {
  line-height: 1.7;
  margin-bottom: 0.75rem;
  text-align: justify;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.chat-message p:last-child {
  margin-bottom: 0;
}

.chat-message p.mb-3 {
  margin-bottom: 1rem;
}

.chat-message p.mb-0 {
  margin-bottom: 0;
}

/* Special formatting for poetic text */
.chat-message p.poetic-text {
  line-height: 1.8;
  font-style: italic;
  color: #6b7280;
  text-align: left;
  padding: 0.5rem 0;
}

.chat-message p.poetic-text br {
  display: block;
  margin: 0.25rem 0;
  content: "";
}

/* Dark mode adjustments for poetic text */
.dark .chat-message p.poetic-text {
  color: #9ca3af;
}

/* Message content styling */
.message-content {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

.message-content p {
  margin: 0;
}

.message-content p:not(:last-child) {
  margin-bottom: 0.75rem;
}

.message-content p.first-paragraph {
  font-weight: 500;
  color: #374151;
}

.dark .message-content p.first-paragraph {
  color: #d1d5db;
}

/* Typing animation */
.typing-dot {
  animation: typing 1.4s infinite ease-in-out;
}

.typing-dot:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Mobile full height fix */
.mobile-full-height {
  height: 100vh;
  height: 100dvh;
}

/* Sidebar transition */
.sidebar-transition {
  transition: transform 0.3s ease-in-out;
}

/* Message bubble enhancements */
.chat-message .bg-white,
.chat-message .bg-gray-800 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.chat-message .bg-blue-600 {
  box-shadow: 0 1px 3px rgba(59, 130, 246, 0.3);
}
</style>
