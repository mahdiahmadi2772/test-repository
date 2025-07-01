<template>
  <div class="bg-gray-800 text-white font-sans" dir="rtl">
    <section
      class="h-screen flex items-center justify-center bg-cover bg-center w-full "
      :style="{ backgroundImage: `url(${backgrounds[currentBackground]})` }"
    >
      <div
        class="w-2/3 bg-gray-500/50 backdrop-blur-[8px] bg-opacity-60 p-8 rounded-xl text-center animate-bounce"
      >
        <p class="text-4xl md:text-6xl mb-6 text-amber-50">
          باشگاه بدنسازی
          <span
            class="text-red-600 hover:text-fuchsia-700 transition-all duration-500 font-bold "
          >
            {{ text }}
          </span>
        </p>
        <p class="mb-6 text-lg">تناسب اندام خود را به ما بسپارید</p>
        <a
          href="#msgbox"
          class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
          >عضویت
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onUnmounted } from "vue";

const words = ["حرفه ای ", "تندرست"];
const text = ref(words[0]);
const index = ref(0);

const backgrounds = [
  "https://cdn.pixabay.com/photo/2014/11/11/15/24/gym-526995_1280.jpg",
  "/src/assets/images/b2.webp",
];

const currentBackground = ref(0);
let intervalId = null;

let intertime = null;

onMounted(() => {
  intertime = setInterval(() => {
    index.value = (index.value + 1) % words.length;
    text.value = words[index.value];
  }, 1000);

  intervalId = setInterval(() => {
    currentBackground.value =
      (currentBackground.value + 1) % backgrounds.length;
  }, 2000);
});

onBeforeUnmount(() => {
  clearInterval(intertime);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped></style>
