<template>
  <panelpage />

  <h1 class="text-black absolute top-30 left-120">اطلاعات محصولات</h1>
  <router-link to="/add_product">
    <button
      class="w-30 h-8 bg-green-700 text-white rounded-xl absolute top-30 left-15 hover:bg-green-400 hover:cursor-pointer"
    >
      افزودن محصول
    </button>
  </router-link>
  <div class="overflow-x-auto p-4">
    <table
      class="w-240 rounded-2xl overflow-hidden shadow-md absolute left-5 top-50"
      dir="rtl"
    >
      <thead class="bg-sky-600 text-white text-sm font-semibold">
        <tr>
          <th class="px-6 py-3 text-right whitespace-nowrap">تصویر</th>
          <th class="px-6 py-3 text-right whitespace-nowrap pr-7">نام</th>
          <th class="px-6 py-3 text-right whitespace-nowrap pr-7">قیمت</th>
          <th class="px-6 py-3 text-right whitespace-nowrap pr-10">ویرایش</th>
          <th class="px-6 py-3 text-right whitespace-nowrap pr-10">حذف</th>
        </tr>
      </thead>
      <tbody
        class="text-gray-800 text-sm bg-white"
        v-for="product in products"
        :key="product.id"
      >
        <tr
          class="hover:bg-gray-50 transition duration-200 border-b-1 border-gray-300"
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <img
              :src="product.image"
              alt="404"
              class="w-15 h-15 rounded-full"
            />
          </td>
          <td class="px-6 py-4 whitespace-nowrap">{{ product.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ product.price }}</td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span
              class="bg-yellow-500 text-black px-3 py-1 rounded-4xl text-xs font-bold w-8 h-4 hover:cursor-pointer"
              >ویرایش</span
            >
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span
              class="bg-red-500 text-white px-3 py-1 rounded-4xl text-xs font-bold w-8 h-4 hover:cursor-pointer"
              >حذف</span
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import panelpage from "@/assets/component/admin-panel/panelpage.vue";

const products = ref([]);
const error = ref(null);

const Getproducts = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/products/");
    const data = await res.json();
    products.value = data;
  } catch (err) {
    error.value = err.message || "خطای ناشناخته";
  }
};
onMounted(Getproducts);
</script>

<style scoped></style>
