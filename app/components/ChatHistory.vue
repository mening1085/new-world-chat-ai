<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="space-y-2">
      <div
        v-for="chat in chatHistory"
        :key="chat.session_key"
        class="p-3 rounded-lg cursor-pointer transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
        :class="{
          'bg-zinc-100 dark:bg-zinc-700':
            chat.session_key === current_session_key,
        }"
        @click="handleSelectChat(chat.session_key)"
      >
        <div class="text-sm font-medium text-zinc-900 dark:text-white truncate">
          {{ chat.title }}
        </div>
        <div class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          {{ formatDate(chat.updated_at) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  chatHistory: {
    type: Array,
    required: true,
  },
  current_session_key: {
    type: [String],
    required: true,
  },
});

const emit = defineEmits(["selectChat"]);

const handleSelectChat = (chatId) => {
  emit("selectChat", chatId);
};

const formatDate = (date) => {
  const now = new Date();
  const diff = now - date;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  return date.toLocaleDateString();
};
</script>

<style></style>
