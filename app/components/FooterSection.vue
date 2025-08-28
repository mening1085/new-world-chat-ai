<template>
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
</template>

<script>
export default {};
</script>

<style></style>
