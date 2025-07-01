<template>
  <body class="bg-gray-800 text-white font-sans" dir="rtl">
    <menuheader></menuheader>
    <headerpage></headerpage>
    <section id="msgbox" class="py-16 px-6 md:px-20 bg-gray-900">
      <h2 class="text-3xl font-bold text-center mb-8">با ما در تماس باشید</h2>
      <form
        class="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="نام شما"
          class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        />
        <select
          class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        >
          <option value="">جنسیت</option>
          <option value="1">آقا</option>
          <option value="2">خانم</option>
        </select>
        <input
          type="email"
          placeholder="تلفن شما"
          class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        />
        <textarea
          placeholder="پیام شما"
          class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
        ></textarea>
        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-700 p-3 rounded font-bold"
        >
          ارسال پیام
        </button>
      </form>
    </section>
    <footerpage></footerpage>
  </body>
</template>

<script setup>
import menuheader from "@/assets/component/menuheader.vue";
import headerpage from "@/assets/component/headerpage.vue";
import footerpage from "@/assets/component/footerpage.vue";
</script>

<style></style>
