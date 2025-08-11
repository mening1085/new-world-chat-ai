<template>
  <div class="min-h-screen bg-neutral-50 dark:bg-zinc-900">
    <div class="flex p-[30px] gap-2">
      <div class="flex-shrink-0">sdaf</div>
      <div class="flex-1">
        <div
          class="border-1 border-zinc-200 dark:border-zinc-700 rounded-2xl overflow-hidden"
        >
          <slot />
        </div>
      </div>
    </div>
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
