<template>
  <panelpage class="w-250" />
  <main>
    <div
      class="mx-auto p-4 bg-white shadow-xl shadow-sky-100 rounded-4xl space-y-4 absolute top-30 left-70 h-115 w-130 border-1 border-dashed border-gray-400"
      dir="rtl"
    >
      <h2 class="text-xl font-bold text-center mb-10">افزودن محصول</h2>

      <input
        v-model="name"
        type="text"
        placeholder=" نام محصول را وارد کنید"
        class="w-full p-2 rounded-2xl border-2 border-sky-400 mb-7"
      />

      <input
        v-model="price"
        type="number"
        placeholder="قیمت محصول را وارد کنید "
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
            <span class="font-semibold"> آپلود تصویر</span>
          </p>
          <p class="text-xs text-gray-500">تصویر محصول را اینجا انتخاب کنید</p>
        </div>
        <input type="file" class="hidden" @change="uploadimage" />
        <p class="text-black z-50 absolute top-90 left-55">{{ fileName }}</p>
      </label>

      <button
        @click="addproduct"
        class="bg-green-600 text-white p-2 rounded-2xl w-full hover:bg-green-900"
      >
        ثبت محصول
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import panelpage from "@/assets/component/admin-panel/panelpage.vue";

const name = ref("");
const price = ref("");
const image = ref(null);

const fileName = ref("");

function uploadimage(event) {
  image.value = event.target.files[0];
  const file = event.target.files[0];
  if (file) {
    fileName.value = file.name;
  }
}

async function addproduct() {
  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("price", price.value);
  if (image.value) {
    formData.append("image", image.value);
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/products/", {
      method: "POST",
      headers: {
        Authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUwNTcyMzIxLCJpYXQiOjE3NTA1NzIwMjEsImp0aSI6ImQ2NWY1N2Y2M2E0YTQ4ZGRhNjg4ZGUzYWRlOTVhMzNjIiwidXNlcl9pZCI6NX0.kbsRLg-X3VoDfIelxhNQvWg8bzcQFoQuxuGGNOqhyrU",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    let data = await res.json();

    alert("محصول با موفقیت افزوده شد!");

    name.value = "";
    price.value = "";
    image.value = null;
  } catch (err) {
    alert("error");
  }
}
</script>

<style scoped></style>
