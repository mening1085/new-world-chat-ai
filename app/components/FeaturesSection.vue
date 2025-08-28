<template>
  <div class="container mx-auto px-6 py-[6rem]" id="features">
    <div class="text-center mb-16">
      <h2
        class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-amber-300 mb-4"
      >
        {{ $t("features.title") }}
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {{ $t("features.desc") }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Feature 1 -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-amber-300 dark:border-amber-300"
      >
        <img src="../assets/images/ai/sub-topic-1.jpeg" alt="" />
        <div class="p-3">
          <div class="text-lg font-bold">{{ $t("features.sub_title_1") }}</div>
          <div class="w-1/2 bg-amber-400 h-[1px] my-2"></div>
          <div class="text-zinc-700 dark:text-zinc-400">
            {{ $t("features.sub_desc_1") }}
          </div>
        </div>
      </div>

      <!-- Feature 2 -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-amber-300 dark:border-amber-300"
      >
        <img src="../assets/images/ai/sub-topic-2.jpeg" alt="" />
        <div class="p-3">
          <div class="text-lg font-bold">{{ $t("features.sub_title_2") }}</div>
          <div class="w-1/2 bg-amber-400 h-[1px] my-2"></div>
          <div class="text-zinc-700 dark:text-zinc-400">
            {{ $t("features.sub_desc_2") }}
          </div>
        </div>
      </div>

      <!-- Feature 3 -->
      <div
        class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-amber-300 dark:border-amber-300"
      >
        <img src="../assets/images/ai/sub-topic-3.jpeg" alt="" />
        <div class="p-3">
          <div class="text-lg font-bold">{{ $t("features.sub_title_3") }}</div>
          <div class="w-1/2 bg-amber-400 h-[1px] my-2"></div>
          <div class="text-zinc-700 dark:text-zinc-400">
            {{ $t("features.sub_desc_3") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
