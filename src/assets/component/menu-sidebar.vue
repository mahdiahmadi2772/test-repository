<template>
  <div class="flex h-screen" dir="rtl">
    <!-- سایدبار -->
    <aside
      :class="[
        'bg-gray-800 text-white transition-all duration-300 ease-in-out overflow-hidden flex flex-col',
        isSidebarOpen ? 'w-64' : 'w-0',
      ]"
    >
      <button
        @click="toggleSidebar"
        class="p-4 focus:outline-none self-end"
        aria-label="Toggle Sidebar"
      >
        <!-- آیکون منو -->
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <nav v-if="isSidebarOpen" class="mt-4 flex-1">
        <ul>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">خانه</li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">درباره ما</li>
          <li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">تماس</li>
        </ul>
      </nav>
    </aside>

    <!-- بخش اصلی -->
    <div class="flex-1 flex flex-col">
      <!-- هدر -->
      <header class="bg-white shadow p-4 flex items-center">
        <!-- آیکون کوچک برای باز کردن سایدبار وقتی بسته است -->
        <button
          v-if="!isSidebarOpen"
          @click="toggleSidebar"
          class="p-2 mr-2 focus:outline-none"
          aria-label="Open Sidebar"
        >
          <svg
            class="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        <h1 class="text-xl font-bold">عنوان سایت</h1>
      </header>

      <!-- محتوا -->
      <main class="p-4 flex-1 bg-gray-100">محتوا اینجا قرار می‌گیرد...</main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(true);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>
