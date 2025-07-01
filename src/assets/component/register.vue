<template>
  <div
    class="bg-gray-900 from-blue-500 to-purple-600 min-h-screen flex items-center justify-center font-sans"
    dir="rtl"
  >
    <router-link to="/"
      ><h1
        class="text-pink-500 text-2xl text-bold font-sans text-center absolute top-10 left-120 mb-3"
      >
        💪 TANDOROST-GYM 💪
      </h1></router-link
    >
    <div
      class="w-120 h-130 bg-white rounded-3xl shadow-2xl p-5 space-y-1 mt-20"
    >
      <h2 class="text-3xl font-bold text-center text-gray-800 pb-5">
        فرم ثبت‌ نام
      </h2>

      <form class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"
            >نام و نام خانوادگی</label
          >
          <input
            type="text"
            placeholder="مثال: مهدی محمدی"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"
            >نام کاربری</label
          >
          <input
            v-model="username"
            type="text"
            placeholder="مثال: ali123@"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"
            >رمز عبور</label
          >
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1"
            >شماره تلفن</label
          >
          <input
            type="tel"
            class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200 text-lg font-semibold"
        >
          ثبت‌ نام
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-4">
        قبلاً ثبت‌ نام کرده‌اید؟
        <router-link to="/login">
          <span class="text-blue-600 hover:underline mr-2 font-bold"
            >وارد شوید</span
          ></router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
