<template>
  <panelpage />

  <h1 class="text-black absolute top-30 left-120">اطلاعات کاربران</h1>
  <router-link to="/add_user">
    <button
      class="w-30 h-8 bg-green-700 text-white rounded-2xl absolute top-30 left-15 hover:bg-green-400 hover:cursor-pointer"
    >
      افزودن کاربر
    </button>
  </router-link>
  <div class="overflow-x-auto p-4">
    <table
      class="w-240 rounded-2xl overflow-hidden shadow-md absolute left-5 top-50"
      dir="rtl"
    >
      <thead class="bg-sky-600 text-white text-sm font-semibold">
        <tr>
          <th class="px-6 py-3 text-right whitespace-nowrap">پروفایل</th>
          <th class="px-6 py-3 text-right whitespace-nowrap pr-7">
            نام کاربری
          </th>
          <th class="px-6 py-3 text-right whitespace-nowrap pr-7">تلفن</th>
          <th class="px-6 py-3 text-right whitespace-nowrap pr-10">ویرایش</th>
          <th class="px-6 py-3 text-right whitespace-nowrap pr-10">حذف</th>
        </tr>
      </thead>
      <tbody
        class="text-gray-800 text-sm bg-white"
        v-for="user in users"
        :key="user.id"
      >
        <tr
          class="hover:bg-gray-50 transition duration-200 border-b-1 border-gray-300"
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <img :src="user.profile" alt="404" class="w-12 h-12 rounded-full" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap">{{ user.username }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ user.phone }}</td>
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
import { ref, onMounted, computed, watch } from "vue";
import panelpage from "@/assets/component/admin-panel/panelpage.vue";

const users = ref([]);
const error = ref(null);

const Getusers = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/users/");
    const data = await res.json();
    users.value = data;
  } catch (err) {
    error.value = err.message || "خطای ناشناخته";
  }
};
onMounted(Getusers);
</script>

<style scoped></style>
