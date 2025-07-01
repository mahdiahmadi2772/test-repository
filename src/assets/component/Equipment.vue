<template>
  <menuheader></menuheader>
  <headerpage></headerpage>
  <div class="max-w-7xl mx-auto p-4 bg-gray-900" id="equimentbox">
    <h1 class="text-white text-2xl text-shadow-current absolute left-120 mt-3">
      دستگاه های مدرن بدنسازی
    </h1>

    <div class="flex flex-wrap gap-20 justify-center bg-gray-900 mt-20 w-300">
      <div
        class="flex flex-col items-center bg-white w-60 h-75 mt-10 mb-5 rounded-4xl shadow-lg hover:shadow-fuchsia-100"
        v-for="item in Equipments"
        :key="item.id"
      >
        <img
          :src="item.photo"
          alt="محصول"
          class="w-60 h-75 object-cover rounded-4xl"
        />
      </div>
    </div>
  </div>
  <footerpage></footerpage>
</template>

<script setup>
import { ref, onMounted } from "vue";
import menuheader from "@/assets/component/menuheader.vue";
import headerpage from "@/assets/component/headerpage.vue";
import footerpage from "@/assets/component/footerpage.vue";

const Equipments = ref([]);
const error = ref(null);

const GetEquipments = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/gallery/");
    const data = await res.json();
    Equipments.value = data;
  } catch (err) {
    error.value = err.message || "خطای ناشناخته";
  }
};
onMounted(GetEquipments);
</script>

<style scoped></style>
