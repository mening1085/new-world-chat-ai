<template>
  <div class="p-4 border-b border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-xl font-bold text-gray-900 dark:text-white">
        Buddy AI Chat
      </h1>
      <div class="flex items-center space-x-2">
        <UButton
          size="sm"
          color="gray"
          variant="ghost"
          class="cursor-pointer hidden lg:block"
          @click="toggleDark()"
        >
          <ClientOnly>
            <Icon
              :name="isDark ? 'heroicons:sun' : 'heroicons:moon'"
              class="w-5 h-5"
            />
            <template #fallback>
              <Icon name="heroicons:moon" class="w-5 h-5" />
            </template>
          </ClientOnly>
        </UButton>
        <UButton
          size="sm"
          color="gray"
          variant="ghost"
          class="lg:hidden cursor-pointer"
          @click="closeSidebar()"
        >
          <ClientOnly>
            <Icon name="heroicons:x-mark" class="w-5 h-5" />
          </ClientOnly>
        </UButton>
      </div>
    </div>
    <UButton
      block
      size="lg"
      color="primary"
      @click="startNewChat()"
      class="cursor-pointer"
    >
      <ClientOnly>
        <Icon name="fluent:people-chat-32-regular" class="w-5 h-5" />
      </ClientOnly>
      เลือกตัวละคร
    </UButton>
  </div>
</template>

<script setup>
const props = defineProps({
  isDark: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggleDark", "closeSidebar", "startNewChat"]);

const toggleDark = () => {
  emit("toggleDark");
};

const closeSidebar = () => {
  emit("closeSidebar");
};

const startNewChat = () => {
  emit("startNewChat");
};
</script>

<style></style>
