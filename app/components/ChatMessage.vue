<template>
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
        Start a conversation with our AI assistant. Ask questions, get help, or
        just chat!
      </p>
    </div>

    <!-- Messages -->
    <div v-else class="space-y-6">
      <div v-for="message in messages" :key="message.id" class="chat-message">
        <!-- User Message -->
        <div v-if="message.role === 'user'" class="flex justify-end">
          <div class="max-w-xs sm:max-w-sm lg:max-w-2xl">
            <div
              class="bg-zinc-200 dark:bg-zinc-700 text-white rounded-2xl rounded-br-md px-3 py-2 sm:px-4 sm:py-3"
            >
              <p class="text-sm">{{ message.content }}</p>
            </div>
            <div
              class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 text-right"
            >
              {{ formatTime(message.created_at) }}
            </div>
          </div>
        </div>

        <!-- AI Message -->
        <div v-else class="flex justify-start">
          <div class="max-w-xs sm:max-w-sm lg:max-w-2xl">
            <div class="flex items-start space-x-2 sm:space-x-3">
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center flex-shrink-0"
              >
                {{ character_name.charAt(0).toUpperCase() }}
              </div>
              <div
                class="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl rounded-bl-md px-3 py-2 sm:px-4 sm:py-3"
              >
                <div
                  class="text-sm text-zinc-900 dark:text-white"
                  v-html="formatMessage(message.content)"
                ></div>
              </div>
            </div>
            <div
              class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 ml-8 sm:ml-11"
            >
              {{ formatTime(message.created_at) }}
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
                <div class="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                <div class="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  messages: {
    type: Array,
    required: true,
  },
  character_name: {
    type: String,
    required: true,
  },
  isTyping: {
    type: Boolean,
    default: false,
  },
});

const chatContainer = ref(null);

const formatTime = (date) => {
  date = new Date(date);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const formatMessage = (content) => {
  // Simple markdown-like formatting
  return (
    content
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(
        /\*(.*?)\*/g,
        "<em class='text-gray-600 dark:text-gray-500 font-bold'>$1</em>"
      )
      // .replace(
      //   /`(.*?)`/g,
      //   '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>'
      // )
      // .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
      .replace(/\n/g, "<br>")
  );
};
</script>

<style></style>
