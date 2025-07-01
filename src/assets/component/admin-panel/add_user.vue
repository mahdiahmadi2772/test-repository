<template>
  <panelpage class="w-250" />
  <main>
    <div
      class="mx-auto p-4 bg-white shadow-xl shadow-sky-100 rounded-4xl space-y-4 absolute top-30 left-70 h-115 w-130 border-1 border-dashed border-gray-400"
      dir="rtl"
    >
      <h2 class="text-xl font-bold text-center mb-10">افزودن کاربر</h2>

      <input
        v-model="username"
        type="text"
        placeholder="نام"
        class="w-full p-2 rounded-2xl border-2 border-sky-400 mb-7"
      />

      <input
        v-model="phone"
        type="text"
        placeholder="تلفن"
        class="w-full p-2 rounded-2xl border-2 border-sky-400 mb-7"
      />

      <label
        class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer bg-gray-50 hover:bg-blue-50 transition duration-300"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16V4m0 0L3 8m4-4l4 4m6 4v8m0 0l4-4m-4 4l-4-4"
            ></path>
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold"> آپلود پروفایل</span>
          </p>
          <p class="text-xs text-gray-500">
            پروفایل کاربر را اینجا انتخاب کنید
          </p>
        </div>
        <input type="file" class="hidden" @change="uploadprofile" />
        <p class="text-black z-50 absolute top-90 left-55">{{ fileName }}</p>
      </label>

      <button
        @click="adduser"
        class="bg-green-600 text-white p-2 rounded-2xl w-full hover:bg-green-900"
      >
        ثبت کاربر
      </button>

      <div v-if="message" class="text-green-600 font-medium mt-2">
        {{ message }}
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import panelpage from "@/assets/component/admin-panel/panelpage.vue";

const fileName = ref("");

const username = ref("");
const phone = ref("");
const profile = ref(null);
const message = ref("");

function uploadprofile(event) {
  profile.value = event.target.files[0];
  const file = event.target.files[0];
  if (file) {
    fileName.value = file.name;
  }
}

async function adduser() {
  const formData = new FormData();
  formData.append("username", username.value);
  formData.append("phone", phone.value);
  if (profile.value) {
    formData.append("profile", profile.value);
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/users/", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    alert("کاربر با موفقیت افزوده شد!");

    username.value = "";
    phone.value = "";
    profile.value = null;
  } catch (err) {
    alert("error 404");
  }
}
</script>

<style scoped></style>
