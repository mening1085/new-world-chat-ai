<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <slot />
  </div>
</template>

<script setup>
// Import CSS
import "@/assets/css/main.css";

// Set page title and meta
useHead({
  title: "Kuddy AI Chat - Your Intelligent Assistant",
  meta: [
    {
      name: "description",
      content:
        "Chat with Kuddy AI assistant powered by advanced language models",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});

// Enable color mode
const colorMode = useColorMode();
</script>
