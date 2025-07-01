<template>
  <div class="w-200 h-150 mx-auto mt-20 rounded-4xl shadow-2xl shadow-sky-300">
    <img
      src="/src/assets/images/Untitled.png"
      alt=""
      class="object-cover rounded-4xl w-1/2 ml-50"
    />

    <h1 class="ml-55 mt-3 text-4xl">
      Page Is Not Found <span class="text-4xl font-bold text-red-700">404</span>
    </h1>
    <router-link to="/">
      <button
        class="w-40 h-12 ml-80 mt-10 bg-sky-600 text-white rounded-2xl text-xl font-sans pl-2 pr-0 hover:bg-sky-900 hover:cursor-pointer"
      >
        صفحه اصلی
        <svg
          class="w-7 h-6 ml-2 text-white absolute top-147 left-171 pl-1 rotate-180"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
          />
        </svg>
      </button>
    </router-link>
  </div>
  

</template>

<script setup></script>
<style></style>
