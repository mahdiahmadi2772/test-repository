<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />

  <header
    class="bg-amber-50 shadow-md flex flex-col md:flex-row justify-between items-center sticky top-0 z-50 gap-4 md:gap-0 p-4"
    dir="rtl"
  >
    <div class="order-3 md:order-1 w-full md:w-auto text-center md:text-left">
      <router-link to="/login">
        <button
          class="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full text-sm md:text-base transition duration-300"
        >
          ورود / ثبت نام
        </button> 
      </router-link>
    </div>

    <div
      class="text-xl md:text-2xl font-bold text-black order-1 md:order-2 hover:text-fuchsia-800 transition duration-300"
    >
      <router-link to="/mainpage">💪 TANDOROST-GYM 💪</router-link>
    </div>

    <nav 
      class="flex flex-wrap justify-center gap-3 md:gap-5 order-2 md:order-3 w-full md:w-auto"
    >
      <router-link to="/" class="text-black hover:text-fuchsia-500 transition duration-300 flex items-center">
        <i class="fas fa-home m-1"></i>خانه
      </router-link>
      <router-link
        to="/mainpage#mainbox"
        class="text-black hover:text-fuchsia-500 transition duration-300 flex items-center"
      >
        <i class="fa-solid fa-circle-info m-1"></i>خدمات
      </router-link>
      <router-link
        to="/products#productsbox"
        class="text-black hover:text-fuchsia-500 transition duration-300 flex items-center"
      >
        <i class="fas fa-box m-1"></i>محصولات
      </router-link>
      <router-link
        to="/massagepage#msgbox"
        class="text-black hover:text-fuchsia-500 transition duration-300 flex items-center"
      >
        <i class="fas fa-envelope m-1"></i>ارتباط با ما
      </router-link>
      <router-link
        to="/shopping#shop"
        class="text-black hover:text-fuchsia-500 transition duration-300 flex items-center bg-pink-300 p-2 rounded-lg"
      >
        🛒
      </router-link>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>

.router-link-active {
  color: rgb(237, 37, 207);
  font-weight: bold; 
}
.rounded-4xl {
  border-radius: 1.5rem; 
}

.cart-icon::before {
  content: "🛒";
  margin-right: 5px;
}


</style>
