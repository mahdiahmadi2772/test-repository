<template>
  <menuheader></menuheader>
  <headerpage></headerpage>
  <div class="max-w-7xl mx-auto p-4 bg-amber-100" dir="rtl">
    <h1
      class="text-black font-bold text-2xl text-shadow-current absolute left-130 mt-3"
    >
      مقالات ورزشی و سلامتی
    </h1>
    <div class="flex flex-wrap gap-20 justify-center bg-amber-100 mt-20">
      <div
        class="flex flex-col items-center bg-white w-60 h-80 rounded-2xl shadow-lg hover:shadow-fuchsia-100"
        v-for="Article in Articles"
        :key="Article.id"
      >
        <img
          :src="Article.image"
          alt="محصول"
          class="w-55 h-45 object-cover pt-2"
        />
        <h2 class="text-lg font-semibold text-gray-800 pt-5 pb-3 mb-2">
          {{ Article.title }}
        </h2>
        <div class="flex items-center text-sm text-gray-500 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span> April 2025</span>
        </div>
        <router-link :to="`/blog/${Article.id}`"
          ><button
            class="w-50 h-8 bg-pink-700 text-white text-bold mt-1 rounded-4xl"
          >
            خواندن مقاله
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <h1>{{ tedad }}</h1>
  <footerpage></footerpage>
</template>

<script setup>
import { ref, onMounted } from "vue";
import menuheader from "@/assets/component/menuheader.vue";
import headerpage from "@/assets/component/headerpage.vue";
import footerpage from "@/assets/component/footerpage.vue";

const Articles = ref([]);
const error = ref(null);

const GetArticle = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/blogs/");
    const data = await res.json();
    Articles.value = data;
  } catch (err) {
    error.value = err.message || "خطای ناشناخته";
  }
};

onMounted(GetArticle);
</script>

<style scoped></style>
