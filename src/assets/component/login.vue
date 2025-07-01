<template>
  <div
    class="bg-gray-900 from-indigo-500 to-purple-600 min-h-screen flex items-center justify-center font-sans"
    dir="rtl"
  >
    <router-link to="/"
      ><h1
        class="text-pink-500 text-2xl text-bold font-sans text-center absolute top-10 left-120 mt-10"
      >
        💪 TANDOROST-GYM 💪
      </h1></router-link
    >
    <router-link to="/panelpage"
      ><h1
        class="text-pink-500 text-2xl text-bold font-sans text-center absolute top-10 left-40 mt-10 bg-amber-50 rounded-2xl p-1"
      >
        پنل ادمین
      </h1></router-link
    >
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mt-20">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
        ورود به حساب کاربری
      </h2>

      <form class="space-y-4">
        <div>
          <label
            class="block text-right text-sm font-medium text-gray-700 mb-1"
          >
            نام کاربری</label
          >
          <input
            type="text"
            placeholder="example/ @mahdi1234 "
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label class="block text-right text-sm font-medium text-gray-700 mb-1"
            >رمز عبور</label
          >
          <input
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              class="form-checkbox text-indigo-600 ml-2 mt-2"
            />
            <span> نمایش رمز عبور </span>
          </label>
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          ورود
        </button>
      </form>

      <p class="mt-6 text-center text-sm text-gray-600">
        حساب کاربری ندارید؟
        <router-link to="/register">
          <span class="text-indigo-600 hover:underline font-bold"
            >ثبت‌ نام کنید</span
          ></router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
