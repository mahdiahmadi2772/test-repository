<template>
  <div class="flex flex-row-reverse min-h-screen bg-gray-100" dir="ltr">
    <aside
      class="w-64 bg-white border-l shadow-lg p-4 space-y-4 fixed top-0 right-0 h-screen"
      dir="rtl"
    >
      <h2 class="text-2xl font-bold text-gray-700 mb-6 pb-5 border-b">
        پنل ادمین
      </h2>

      <nav class="space-y-2">
        <router-link
          to="/UsersList"
          class="flex items-center p-2 rounded-xl text-gray-700 hover:bg-blue-200 hover:shadow-xl transition"
        >
          <svg
            class="w-10 h-8 ml-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.121 17.804A9 9 0 0112 15a9 9 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          لیست کاربران
        </router-link>
        <router-link
          to="/productlist"
          class="flex items-center p-2 rounded-xl text-gray-700 hover:bg-blue-200 hover:shadow-xl transition"
        >
          <svg
            class="w-10 h-7 ml-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5L12 12 3.75 7.5m16.5 0L12 3 3.75 7.5m16.5 0v9L12 21 3.75 16.5v-9"
            />
          </svg>

          مدیریت محصولات
        </router-link>
        <router-link
          to="add_user"
          class="flex items-center p-2 rounded-xl text-gray-700 hover:bg-blue-200 hover:shadow-xl transition"
        >
          <svg
            class="w-10 h-6 ml-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h6M9 16h6M9 8h6M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
            />
          </svg>

          سفارشات
        </router-link>
        <router-link
          to="add_product"
          class="flex items-center p-2 rounded-xl text-gray-700 hover:bg-blue-200 hover:shadow-xl transition"
        >
          <svg
            class="w-10 h-6 ml-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7 8h10M7 12h6m-6 4h8M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
            />
          </svg>

          مدیریت بلاگ ها
        </router-link>
      </nav>
    </aside>

    <main class="flex-1 p-6 bg-white">
      <div
        class="bg-white w-252 h-20 fixed top-0 left-0 z-50 border-b-sky-500 border-b-1"
      >
        <div class="absolute w-full max-w-xs right-4 top-5">
          <input
            type="text"
            placeholder="جستجو..."
            class="w-full pl-10 pr-10 py-2 border-5 border-sky-400 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
          <svg
            class="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
            />
          </svg>
        </div>
        <router-link to="/#">
          <button
            class="w-20 h-8 bg-red-500 px-2 rounded-2xl mt-5 ml-5 text-white pb-1 pl-7 hover:bg-sky-400 hover:cursor-pointer transition"
          >
            خروج
            <svg
              class="w-7 h-6 ml-2 text-white absolute top-8 left-3 pl-2 pt-1"
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
        <button
          class="w-30 h-8 bg-green-700 px-2 rounded-4xl mt-7 ml-5 text-white pb-1 pl-7 text-sm pt-1"
        >
          1404/03/28
          <svg
            class="w-7 h-4 ml-2 text-white absolute top-9 left-28 pl-1"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7V3m8 4V3M5 11h14M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
            />
          </svg>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-active {
  background-color: rgb(83, 230, 247);
}
</style>
