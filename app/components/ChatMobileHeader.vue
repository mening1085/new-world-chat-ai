<template>
  <div
    class="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4"
  >
    <div class="flex items-center justify-between">
      <UButton
        size="lg"
        color="gray"
        variant="ghost"
        @click="openSidebar"
        class="cursor-pointer"
      >
        <ClientOnly>
          <Icon name="heroicons:bars-3" class="w-6 h-6" />
        </ClientOnly>
      </UButton>
      <h1 class="text-lg font-semibold text-gray-900 dark:text-white">
        Kuddy AI Chat
      </h1>
      <UButton
        size="sm"
        color="gray"
        variant="ghost"
        class="cursor-pointer"
        @click="toggleDark()"
      >
        <ClientOnly>
          <Icon
            :name="isDark ? 'heroicons:sun' : 'heroicons:moon'"
            class="w-4 h-4"
          />
          <template #fallback>
            <Icon name="heroicons:moon" class="w-4 h-4" />
          </template>
        </ClientOnly>
      </UButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isDark: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["openSidebar", "toggleDark"]);

const openSidebar = () => {
  emit("openSidebar");
};

const toggleDark = () => {
  emit("toggleDark");
};
</script>

<style></style>
