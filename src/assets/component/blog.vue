<template>
  <menuheader></menuheader>
  <headerpage></headerpage>
  <div class="max-w-7xl mx-auto p-4 bg-amber-50" dir="rtl">
    <h1 class="text-black font-stretch-100% text-2xl mb-5 mr-120">
      {{ blog.title }}
    </h1>
    <div class="flex gap-10 mr-25">
      <img :src="blog.image" alt="" class="w-120 h-70 rounded-4xl" />
    </div>
    <pre class="text-xs text-black mt-10 font-bold">
    {{ blog.content }}
  </pre
    >
  </div>

  <footerpage></footerpage>
</template>

<script setup>
import { ref, onMounted } from "vue";
import menuheader from "@/assets/component/menuheader.vue";
import headerpage from "@/assets/component/headerpage.vue";
import footerpage from "@/assets/component/footerpage.vue";
import { useRoute } from "vue-router";

const blog = ref([]);
const error = ref(null);

const route = useRoute();
const id = route.params.id;

const GetBlogs = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/blogs/${id}/`);
    const data = await res.json();
    blog.value = data;
  } catch (err) {
    error.value = err.message || "خطای ناشناخته";
  }
};

onMounted(GetBlogs);
</script>

<style scoped></style>
