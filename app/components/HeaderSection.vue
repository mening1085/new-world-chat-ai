<template>
  <nav
    :class="[
      'transition-all duration-300 ',
      isSticky
        ? 'fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-lg'
        : '',
    ]"
    style="will-change: transform"
  >
    <div class="container mx-auto py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <div class="flex items-center space-x-2">
            <div class="flex items-center justify-center">
              <img
                src="../assets/images/ai/logo.jpeg"
                class="rounded-lg w-[50px] h-[50px]"
                alt=""
              />
            </div>
          </div>
        </NuxtLink>

        <div class="flex items-center">
          <UButton
            color="blue"
            class="hover:bg-black/50 rounded-lg cursor-pointer"
          >
            Get Started
          </UButton>

          <div class="h-[20px] w-[1px] bg-amber-400 mx-1"></div>

          <UButton
            color="blue"
            class="hover:bg-black/50 cursor-pointer rounded-lg w-[45px] flex justify-center"
            @click="handleSetLocale(lang === 'th' ? 'en' : 'th')"
          >
            {{ lang === "th" ? "TH" : "EN" }}
          </UButton>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { locales, setLocale, locale } = useI18n();
const lang = computed(() => locale.value);

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 1;
};

const handleSetLocale = (val) => {
  setLocale(val);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style></style>
