<template>
  <body class="bg-gray-800 text-white font-sans" dir="rtl">
    <menuheader></menuheader>
    <headerpage></headerpage>
    <section class="py-16 px-6 md:px-20 bg-amber-50" id="mainbox">
      <h2 class="text-3xl font-bold text-center mb-12 text-black">خدمات ما</h2>
      <div class="grid md:grid-cols-3 gap-8 text-center group">
        <router-link to="/program#exercisebox">
          <div
            class="p-5 w-80 h-100 bg-gray-700 rounded-xl shadow-lg hover:bg-fuchsia-700 group-hover:shadow-fuchsia-500"
          >
            <img
              src="@/assets/images/photo_2025-05-30_18-54-36.jpg"
              alt="12"
              style="width: 100%; height: 50%"
              class="rounded-4xl mb-2"
            />
            <h3 class="text-xl font-bold mb-2">برنامه تمرینی حرفه ای</h3>
            <p>زندگی حرفه ای و آسان تر</p>
          </div>
        </router-link>
        <router-link to="/Coach#coachbox">
          <div
            class="p-5 w-80 h-100 bg-gray-700 rounded-xl shadow-lg hover:bg-fuchsia-700 group-hover:shadow-fuchsia-500"
          >
            <img
              src="@/assets/images/download.jpg"
              alt="12"
              style="width: 100%; height: 50%"
              class="rounded-4xl mb-2"
            />

            <h3 class="text-xl font-bold mb-2">مربی‌گری حرفه‌ای</h3>
            <p>مربیان دارای مدرک بین‌المللی و تجربه بالا در بدنسازی</p>
          </div>
        </router-link>
        <router-link to="/Equipment#equimentbox">
          <div
            class="p-5 w-80 h-100 bg-gray-700 rounded-xl shadow-lg hover:bg-fuchsia-700 group-hover:shadow-fuchsia-500"
          >
            <img
              src=" @/assets/images/photo_2025-05-30_19-17-07.jpg"
              alt="12"
              style="width: 100%; height: 50%"
              class="rounded-4xl mb-2"
            />
            <h3 class="text-xl font-bold mb-2">تجهیزات مدرن</h3>
            <p>دستگاه‌ها تمرینی به‌روز و استاندارد جهانی</p>
          </div>
        </router-link>
      </div>
    </section>

    <section class="px-6 py-16 bg-teal-600 text-center" id="monybox">
      <h2 class="text-3xl font-bold mb-10">شهریه های عضویت</h2>
      <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <div
          class="border-4 bg-gray-600 border-fuchsia-800 rounded-xl p-6 hover:bg-gray-900 hover:opacity-90"
        >
          <h3 class="text-xl font-bold mb-4">ماهانه</h3>
          <p class="text-2xl mb-4">۳۵۰,۰۰۰ تومان</p>
          <p>دسترسی کامل به باشگاه</p>
        </div>
        <div
          class="border-8 bg-gray-600 border-fuchsia-800 rounded-xl p-6 hover:bg-gray-900 hover:opacity-90"
        >
          <h3 class="text-xl font-bold mb-4">سه‌ماهه</h3>
          <p class="text-2xl mb-4">۹۰۰,۰۰۰ تومان</p>
          <p>۲۰٪ تخفیف + برنامه رایگان</p>
        </div>
        <div
          class="border-8 bg-gray-600 border-fuchsia-800 rounded-xl p-6 hover:bg-gray-900 hover:opacity-90"
        >
          <h3 class="text-xl font-bold mb-4">سالانه</h3>
          <p class="text-2xl mb-4">۳,۲۰۰,۰۰۰ تومان</p>
          <p>به‌صرفه‌ترین انتخاب + مربی اختصاصی</p>
        </div>
      </div>
    </section>
    <footerpage></footerpage>
  </body>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import menuheader from "@/assets/component/menuheader.vue";
import headerpage from "@/assets/component/headerpage.vue";
import footerpage from "@/assets/component/footerpage.vue";

const words = ["حرفه ای ", "تندرست"];
const text = ref(words[0]);
const index = ref(0);

let intertime = null;

onMounted(() => {
  intertime = setInterval(() => {
    index.value = (index.value + 1) % words.length;
    text.value = words[index.value];
  }, 2000);
});

onBeforeUnmount(() => {
  clearInterval(intertime);
});
</script>

<style scoped></style>
