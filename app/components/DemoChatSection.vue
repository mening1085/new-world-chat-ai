<template>
  <div class="bg-white dark:bg-gray-800 relative z-1 demo" id="demo">
    <div class="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-12">
        <h2
          class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          See It In Action
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Watch how easy it is to chat with our AI assistant
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div
          class="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
        >
          <!-- Mock Chat Interface -->
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-4 max-h-96 overflow-y-auto"
          >
            <div class="space-y-4">
              <!-- User Message -->
              <div class="flex justify-end">
                <div
                  class="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs"
                >
                  <p class="text-sm">Hello! Can you help me with my project?</p>
                </div>
              </div>

              <!-- AI Response -->
              <div class="flex justify-start">
                <div class="flex items-start space-x-2">
                  <div
                    class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center"
                  >
                    <UIcon
                      name="i-heroicons-cpu-chip"
                      class="w-4 h-4 text-gray-600 dark:text-gray-400"
                    />
                  </div>
                  <div
                    class="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 max-w-xs"
                  >
                    <p class="text-sm text-gray-900 dark:text-white">
                      Of course! I'd be happy to help you with your project.
                      What kind of project are you working on?
                    </p>
                  </div>
                </div>
              </div>

              <!-- User Message -->
              <div class="flex justify-end">
                <div
                  class="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs"
                >
                  <p class="text-sm">
                    I'm building a web application with Vue.js
                  </p>
                </div>
              </div>

              <!-- AI Response -->
              <div class="flex justify-start">
                <div class="flex items-start space-x-2">
                  <div
                    class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center"
                  >
                    <UIcon
                      name="i-heroicons-cpu-chip"
                      class="w-4 h-4 text-gray-600 dark:text-gray-400"
                    />
                  </div>
                  <div
                    class="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 max-w-sm"
                  >
                    <p class="text-sm text-gray-900 dark:text-white">
                      Great choice! Vue.js is an excellent framework. I can help
                      you with components, state management, routing, and best
                      practices. What specific aspect would you like assistance
                      with?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 flex items-center space-x-2">
            <div
              class="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2"
            >
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Type your message here...
              </p>
            </div>
            <UButton color="blue" icon="i-heroicons-paper-airplane">
              Send
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.demo {
  background-image: url("../assets/images/ai/chat.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 9rem 0;
}
</style>
