<template>
  <section class="bg-white dark:bg-gray-800 py-8 sm:py-12 md:py-16" id="about">
    <div
      class="container mx-auto px-6 sm:px-6 md:px-8 max-w-6xl space-y-10 sm:space-y-14"
      v-if="locale === 'en'"
    >
      <!-- Block 1 -->
      <div
        class="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12"
      >
        <div class="w-full md:w-7/12 flex flex-col justify-center mt-6 md:mt-0">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-amber-300"
          >
            🐣 What is AI Tamagotchi?
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            AI Tamagotchi is your virtual companion powered by artificial
            intelligence. Unlike a regular chatbot, it isn't just about
            answering questions — it's about building a relationship. You can
            treat it like your own digital pet that lives in your pocket, ready
            to chat, play, and grow whenever you want. Every interaction you
            have shapes its personality and evolution, making it truly unique to
            you.
          </p>
        </div>
        <div class="w-full md:w-5/12 flex justify-center items-center">
          <div
            class="w-full max-w-xs aspect-square flex items-center justify-center"
          >
            <img
              class="w-full h-full object-cover rounded-xl about-img shadow-lg"
              src="../assets/images/ai/about-1.jpeg"
              alt="AI Tamagotchi"
            />
          </div>
        </div>
      </div>
      <!-- Block 2 -->
      <div class="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <div
          class="w-full md:w-5/12 flex justify-center items-center mb-4 md:mb-0"
        >
          <div
            class="w-full max-w-xs aspect-square flex items-center justify-center"
          >
            <img
              class="w-full h-full object-cover rounded-xl about-img shadow-lg"
              src="../assets/images/ai/about-2.jpeg"
              alt="AI Tamagotchi"
            />
          </div>
        </div>
        <div class="w-full md:w-7/12 flex flex-col justify-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300">
            🐣 What is AI Tamagotchi?
          </h2>
          <div class="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            <div class="my-3">
              With your AI Tamagotchi, every day brings something new:
            </div>
            <ul class="space-y-1">
              <li>
                🍼 <strong>Feed it</strong> - Share snacks, meals, and treats to
                keep it happy and healthy.
              </li>
              <li>
                🎮 <strong>Play with it</strong> - Enjoy mini-games, activities,
                and funny interactions that bring your pet to life.
              </li>
              <li>
                🌱 <strong>Watch it evolve</strong> - See your Tamagotchi
                change, grow, and develop new traits depending on how you care
                for it.
              </li>
              <li>
                💬 <strong>Chat 24/7</strong> - Talk to your AI buddy anytime,
                anywhere. It's always there to listen, joke around, or just keep
                you company.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Block 3 -->
      <div
        class="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12"
      >
        <div class="w-full md:w-7/12 flex flex-col justify-center mt-6 md:mt-0">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-amber-300"
          >
            🌟 Why You'll Love It
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            AI Tamagotchi isn't just an app — it's a friend you create from your
            own imagination. The more you interact, the more it becomes “yours”:
            a digital pet with quirks, habits, and a personality shaped by the
            way you play and chat. Whether you want a playful sidekick, a caring
            companion, or just a cute little buddy who grows with you, your
            Tamagotchi will always be by your side. It's like raising a virtual
            friend that never stops surprising you.
          </p>
        </div>
        <div class="w-full md:w-5/12 flex justify-center items-center">
          <div
            class="w-full max-w-xs aspect-square flex items-center justify-center"
          >
            <img
              class="w-full h-full object-cover rounded-xl about-img shadow-lg"
              src="../assets/images/ai/about-3.jpeg"
              alt="AI Tamagotchi"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="container mx-auto px-6 sm:px-6 md:px-8 max-w-6xl space-y-10 sm:space-y-14"
      v-else
    >
      <!-- Block 1 -->
      <div
        class="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12"
      >
        <div class="w-full md:w-7/12 flex flex-col justify-center mt-6 md:mt-0">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-amber-300"
          >
            🐣 AI Tamagotchi คืออะไร?
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            AI Tamagotchi คือ เพื่อนเสมือนที่ขับเคลื่อนด้วยปัญญาประดิษฐ์
            ไม่ใช่แค่แชทบอทที่ตอบคำถาม
            แต่เป็นเหมือนสัตว์เลี้ยงดิจิทัลที่คุณสามารถพูดคุย เลี้ยงดู
            และสนุกไปกับมันได้ทุกวัน ทุกการกระทำของคุณจะส่งผลให้มันค่อย ๆ
            พัฒนาและเปลี่ยนแปลงบุคลิก ทำให้กลายเป็นเพื่อนที่ไม่เหมือนใคร
            และเป็นของคุณจริง ๆ
          </p>
        </div>
        <div class="w-full md:w-5/12 flex justify-center items-center">
          <div
            class="w-full max-w-xs aspect-square flex items-center justify-center"
          >
            <img
              class="w-full h-full object-cover rounded-xl about-img shadow-lg"
              src="../assets/images/ai/about-1.jpeg"
              alt="AI Tamagotchi"
            />
          </div>
        </div>
      </div>
      <!-- Block 2 -->
      <div class="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <div
          class="w-full md:w-5/12 flex justify-center items-center mb-4 md:mb-0"
        >
          <div
            class="w-full max-w-xs aspect-square flex items-center justify-center"
          >
            <img
              class="w-full h-full object-cover rounded-xl about-img shadow-lg"
              src="../assets/images/ai/about-2.jpeg"
              alt="AI Tamagotchi"
            />
          </div>
        </div>
        <div class="w-full md:w-7/12 flex flex-col justify-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300">
            ✨ คุณสามารถทำอะไรได้บ้าง?
          </h2>
          <div class="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            <div class="my-3">
              กับ AI Tamagotchi ของคุณ ทุกวันคือการผจญภัยเล็ก ๆ
              ที่น่ารักและสนุกสนาน:
            </div>
            <ul class="space-y-1">
              <li>
                🍼 <strong>ให้อาหาร</strong> -
                เติมความสุขด้วยของว่างหรือมื้ออาหารที่มันโปรดปราน
              </li>
              <li>
                🎮 <strong>เล่นด้วยกัน</strong> -
                เพลิดเพลินกับมินิเกมและกิจกรรมสุดน่ารัก
              </li>
              <li>
                🌱 <strong>ดูมันวิวัฒนาการ</strong> -
                เห็นการเติบโตและการเปลี่ยนแปลงไปสู่ร่างใหม่ ๆ
                ตามวิธีที่คุณเลี้ยงดู
              </li>
              <li>
                💬 <strong>แชทได้ตลอดเวลา</strong> - คุยกับเพื่อนตัวน้อยนี้ได้
                24 ชั่วโมง ทั้งเล่าเรื่อง ตลก ขำขัน หรือแค่ให้มันอยู่เป็นเพื่อน
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Block 3 -->
      <div
        class="flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-12"
      >
        <div class="w-full md:w-7/12 flex flex-col justify-center mt-6 md:mt-0">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-amber-300"
          >
            🌟 ทำไมคุณถึงต้องหลงรักมัน
          </h2>
          <p class="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            AI Tamagotchi ไม่ใช่แอปธรรมดา แต่มันคือ
            เพื่อนที่สร้างขึ้นจากจินตนาการของคุณเอง
            ยิ่งคุณเลี้ยงดูและใช้เวลากับมันมากเท่าไร
            มันก็ยิ่งมีเอกลักษณ์และเฉพาะตัวมากขึ้น คุณอาจได้เพื่อนขี้เล่น
            เพื่อนแสนซน หรือเพื่อนที่อบอุ่นคอยอยู่เคียงข้าง —
            ทุกอย่างขึ้นอยู่กับวิธีที่คุณปฏิบัติต่อมัน
            ราวกับว่าคุณกำลังเลี้ยงเพื่อนดิจิทัลที่ไม่มีวันหยุดทำให้คุณประหลาดใจเลย
          </p>
        </div>
        <div class="w-full md:w-5/12 flex justify-center items-center">
          <div
            class="w-full max-w-xs aspect-square flex items-center justify-center"
          >
            <img
              class="w-full h-full object-cover rounded-xl about-img shadow-lg"
              src="../assets/images/ai/about-3.jpeg"
              alt="AI Tamagotchi"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locales, setLocale, locale } = useI18n();
</script>

<style lang="scss">
.about-img {
  box-shadow: 0 0px 10px 0 rgb(228, 194, 0);
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
