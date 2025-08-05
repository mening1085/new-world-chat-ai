<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
  >
    <!-- Navigation -->
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div
            class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
          >
            <UIcon
              name="i-heroicons-chat-bubble-left-right"
              class="w-5 h-5 text-white"
            />
          </div>
          <h1 class="text-xl font-bold text-gray-900 dark:text-white">
            AI Chat
          </h1>
        </div>
        <div class="flex items-center space-x-4">
          <UButton
            :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
            size="sm"
            color="gray"
            variant="ghost"
            @click="toggleDark()"
          />
          <UButton color="blue" @click="navigateToChat" class="hidden sm:flex">
            Get Started
          </UButton>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="container mx-auto px-6 py-12 lg:py-20">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Main Heading -->
        <div class="mb-8">
          <div
            class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-6"
          >
            <UIcon name="i-heroicons-sparkles" class="w-4 h-4 mr-2" />
            Powered by Advanced AI
          </div>
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            แชทบอทบทบาทสมมติภาษาไทย
            <span
              class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              AI Assistant
            </span>
            <br />
            Like Never Before
          </h1>
          <p
            class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Experience intelligent conversations with our advanced AI assistant.
            Get instant answers, creative help, and personalized assistance
            24/7.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
        >
          <UButton
            size="xl"
            color="blue"
            icon="i-heroicons-chat-bubble-left-right"
            @click="navigateToChat"
            class="w-full sm:w-auto"
          >
            Start Chatting Now
          </UButton>
          <UButton
            size="xl"
            color="gray"
            variant="outline"
            icon="i-heroicons-play"
            @click="scrollToDemo"
            class="w-full sm:w-auto"
          >
            Watch Demo
          </UButton>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">
              24/7
            </div>
            <div class="text-gray-600 dark:text-gray-400">Always Available</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Instant
            </div>
            <div class="text-gray-600 dark:text-gray-400">Fast Responses</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Smart
            </div>
            <div class="text-gray-600 dark:text-gray-400">AI Powered</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="container mx-auto px-6 py-16" id="features">
      <div class="text-center mb-16">
        <h2
          class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Why Choose Our AI Chat?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the features that make our AI assistant the perfect companion
          for your daily tasks.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
        >
          <div
            class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4"
          >
            <UIcon
              name="i-heroicons-lightning-bolt"
              class="w-6 h-6 text-blue-600 dark:text-blue-400"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Lightning Fast
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Get instant responses to your questions with our optimized AI
            engine.
          </p>
        </div>

        <!-- Feature 2 -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
        >
          <div
            class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4"
          >
            <UIcon
              name="i-heroicons-brain"
              class="w-6 h-6 text-purple-600 dark:text-purple-400"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Smart Understanding
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Advanced natural language processing for better comprehension.
          </p>
        </div>

        <!-- Feature 3 -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
        >
          <div
            class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4"
          >
            <UIcon
              name="i-heroicons-shield-check"
              class="w-6 h-6 text-green-600 dark:text-green-400"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Secure & Private
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Your conversations are secure and your privacy is protected.
          </p>
        </div>

        <!-- Feature 4 -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
        >
          <div
            class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4"
          >
            <UIcon
              name="i-heroicons-device-phone-mobile"
              class="w-6 h-6 text-orange-600 dark:text-orange-400"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Mobile Friendly
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Perfect experience across all devices - desktop, tablet, and mobile.
          </p>
        </div>

        <!-- Feature 5 -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
        >
          <div
            class="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4"
          >
            <UIcon
              name="i-heroicons-clock"
              class="w-6 h-6 text-pink-600 dark:text-pink-400"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Chat History
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Never lose your conversations with automatic chat history saving.
          </p>
        </div>

        <!-- Feature 6 -->
        <div
          class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
        >
          <div
            class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4"
          >
            <UIcon
              name="i-heroicons-code-bracket"
              class="w-6 h-6 text-indigo-600 dark:text-indigo-400"
            />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Code Support
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Get help with programming, code review, and technical questions.
          </p>
        </div>
      </div>
    </div>

    <!-- Demo Section -->
    <div class="bg-white dark:bg-gray-800 py-16" id="demo">
      <div class="container mx-auto px-6">
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
                    <p class="text-sm">
                      Hello! Can you help me with my project?
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
                        Great choice! Vue.js is an excellent framework. I can
                        help you with components, state management, routing, and
                        best practices. What specific aspect would you like
                        assistance with?
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
              <UButton
                color="blue"
                icon="i-heroicons-paper-airplane"
                @click="navigateToChat"
              >
                Send
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Start Chatting?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already experiencing the power of
          AI-assisted conversations.
        </p>
        <UButton
          size="xl"
          color="white"
          @click="navigateToChat"
          class="bg-white text-blue-600 hover:bg-gray-50"
        >
          Get Started for Free
        </UButton>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 dark:bg-black py-12">
      <div class="container mx-auto px-6">
        <div class="text-center">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <div
              class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-chat-bubble-left-right"
                class="w-5 h-5 text-white"
              />
            </div>
            <h3 class="text-xl font-bold text-white">AI Chat</h3>
          </div>
          <p class="text-gray-400 mb-6">
            Your intelligent conversation partner, available 24/7
          </p>
          <div class="flex items-center justify-center space-x-6">
            <UButton variant="ghost" color="gray" size="sm">Privacy</UButton>
            <UButton variant="ghost" color="gray" size="sm">Terms</UButton>
            <UButton variant="ghost" color="gray" size="sm">Contact</UButton>
          </div>
          <div class="mt-8 pt-8 border-t border-gray-800">
            <p class="text-gray-500 text-sm">
              © 2025 AI Chat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Dark mode
const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === "dark");

const toggleDark = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

// Navigation functions
const navigateToChat = () => {
  navigateTo("/chat");
};

const scrollToDemo = () => {
  document.getElementById("demo")?.scrollIntoView({
    behavior: "smooth",
  });
};

// SEO
useHead({
  title: "AI Chat - Your Intelligent Assistant",
  meta: [
    {
      name: "description",
      content:
        "Experience intelligent conversations with our advanced AI assistant. Get instant answers, creative help, and personalized assistance 24/7.",
    },
    {
      name: "keywords",
      content:
        "AI chat, artificial intelligence, chatbot, assistant, conversation",
    },
    { property: "og:title", content: "AI Chat - Your Intelligent Assistant" },
    {
      property: "og:description",
      content:
        "Experience intelligent conversations with our advanced AI assistant.",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>

<style scoped>
/* Smooth scrolling for the entire page */
html {
  scroll-behavior: smooth;
}

/* Custom animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

/* Gradient text animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animated-gradient {
  background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #3b82f6, #8b5cf6);
  background-size: 400% 400%;
  animation: gradient 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
