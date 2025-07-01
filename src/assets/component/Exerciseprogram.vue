<template>
  <menuheader></menuheader>
  <headerpage></headerpage>
  <div class="p-6 bg-gray-900 w-315 h-180" id="exercisebox">
    <div class="overflow-x-auto">
      <h1 class="text-white text-2xl ml-120 mb-5">برنامه تمرینی هفتگی</h1>
      <div class="w-280 h-20 mb-10">
        <button
          @click="showTable = !showTable"
          class="px-5 py-2 bg-fuchsia-400 text-white rounded hover:bg-blue-300 mb-6 transition absolute left-250 top-200"
        >
          شنبه
        </button>
        <button
          @click="showTable = !showTable"
          class="px-5 py-2 bg-fuchsia-500 text-white rounded hover:bg-blue-300 mb-6 transition absolute left-210 top-200"
        >
          یکشنبه
        </button>
        <button
          @click="showTable = !showTable"
          class="px-5 py-2 bg-fuchsia-600 text-white rounded hover:bg-blue-300 mb-6 transition absolute left-170 top-200"
        >
          دوشنبه
        </button>
        <button
          @click="showTable = !showTable"
          class="px-5 py-2 bg-fuchsia-700 text-white rounded hover:bg-blue-300 mb-6 transition absolute left-130 top-200"
        >
          سه شنبه
        </button>
        <button
          @click="showTable = !showTable"
          class="px-5 py-2 bg-fuchsia-800 text-white rounded hover:bg-blue-300 mb-6 transition absolute left-90 top-200"
        >
          چهارشنبه
        </button>
        <button
          @click="showTable = !showTable"
          class="px-5 py-2 bg-fuchsia-900 text-white rounded hover:bg-blue-300 mb-6 transition absolute left-50 top-200"
        >
          پنجشنبه
        </button>
      </div>

      <table class="min-w-full rounded-xl overflow-hidden" v-if="showTable">
        <thead class="bg-gray-700 text-white">
          <tr>
            <th class="px-1 py-2 text-left text-sm font-semibold pl-12">
              تعداد ست
            </th>
            <th class="px-1 py-2 text-left text-sm font-semibold pl-12">
              تعداد تکرار
            </th>
            <th class="px-1 py-2 text-left text-sm font-semibold pl-10">
              نام حرکت
            </th>
            <th class="px-1 py-2 text-left text-sm font-semibold">ردیف</th>
          </tr>
        </thead>
        <tbody
          class="bg-white divide-y divide-gray-200"
          v-for="item in exercises"
          :key="item.id"
        >
          <tr class="hover:bg-gray-100">
            <td class="px-1 py-2 text-sm text-gray-900 pl-17">
              {{ item.repetition }}
            </td>
            <td class="px-1 py-2 text-sm text-gray-900 pl-17">
              {{ item.sets }}
            </td>
            <td class="px-3 py-2 text-sm text-gray-600 pl-13">
              {{ item.exercise }}
            </td>
            <td class="px-1 py-2 text-sm">
              <span
                class="inline-block px-1 py-1 text-xs font-medium bg-green-300 text-green-800 rounded-full ml-2"
                >{{ item.id }}</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <footerpage></footerpage>
</template>

<script setup>
import { ref, onMounted } from "vue";
import menuheader from "@/assets/component/menuheader.vue";
import headerpage from "@/assets/component/headerpage.vue";
import footerpage from "@/assets/component/footerpage.vue";

const showTable = ref(false);

const exercises = ref([]);
const error = ref(null);

const GetExercises = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/exercises/");
    const data = await res.json();
    exercises.value = data;
  } catch (err) {
    error.value = err.message || "خطای ناشناخته";
  }
};

onMounted(GetExercises);
</script>

<style scoped></style>
