<template>
  <div class="min-h-screen">
    <div class="banner relative">
      <div class="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>

      <div class="relative z-10">
        <!-- Navigation -->
        <HeaderSection />

        <!-- Hero Section -->
        <HeroSection />
      </div>
    </div>

    <!-- Features Section -->
    <FeaturesSection />

    <!-- Demo Section -->
    <DemoChatSection id="demo" />

    <!-- About -->
    <AboutSection />

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
    <FooterSection />
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

<style lang="scss">
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

.bg_image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  z-index: 1;
  filter: brightness(0.3);
  // clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
}

.banner {
  background-image: url("../assets/images/ai/bg9.jpeg");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
}
</style>
