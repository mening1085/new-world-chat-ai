<script setup></script>

<template>
  <div class="container mx-auto px-6 py-6 lg:pt-20 lg:pb-36">
    <div class="text-center max-w-4xl mx-auto">
      <!-- Main Heading -->
      <div class="flex justify-center mb-12">
        <div
          class="inline-flex items-center bg-black/50 rounded-xl px-2 py-1 text-white text-md md:text-lg font-medium border-b border-b-amber-300"
        >
          <UIcon
            name="i-heroicons-sparkles"
            class="w-4 h-4 mr-2 text-amber-300"
          />
          Powered by BytePlus Models AI
        </div>
      </div>

      <div class="mb-8">
        <div
          class="title text-4xl sm:text-5xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Tamagotchi AI Chat
        </div>

        <p
          class="text-md md:text-2xl text-white my-20 max-w-3xl mx-auto leading-relaxed"
        >
          “{{ $t("hero.text1") }}”
        </p>
      </div>

      <!-- CTA Buttons -->
      <div class="flex items-center justify-center my-12 gap-4">
        <div>
          <UButton
            size="xl"
            color="blue"
            variant="outline"
            icon="i-heroicons-chat-bubble-left-right"
            class="w-full sm:w-auto border hover:bg-black/20 text-white cursor-pointer"
          >
            Start Chatting Now
          </UButton>
        </div>
        <nuxt-link to="#demo">
          <UButton
            size="xl"
            color="gray"
            variant="outline"
            icon="i-heroicons-play"
            class="w-full sm:w-auto border hover:bg-black/20 text-white cursor-pointer"
          >
            Watch Demo
          </UButton>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style></style>
