<script setup>
import { useCartproduct } from "@/store/shop";
import menuheader from "@/assets/component/menuheader.vue";
import footerpage from "@/assets/component/footerpage.vue";

const a = 55000450
const cart = useCartproduct();

const removecart = (Productid) => {
  cart.removeitem(Productid);
};

const incrementcount = (productId) => {
  cart.increment(productId);
};

const decrease = (productId) => {
  cart.decreaseCount(productId);
};

const sumtotals = () => {
  cart.sumprice();
};
</script>

<template>
  <menuheader></menuheader>
  <div class="border-t pt-4 px-4 md:px-8 lg:px-16" id="shop">
    <h2 
      class="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left w-full md:w-auto bg-amber-500 text-white py-3 px-4 rounded-lg md:rounded-4xl ml-0 md:ml-3"
    >
      🛒 سبد خرید شما
    </h2>

    <div v-if="cart.items.length === 0" class="text-gray-800 text-center py-10">
      سبد خرید شما خالی است. برای مشاهده محصولات به صفحه فروشگاه بروید.
    </div>

    <div v-else>
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="flex flex-col md:flex-row items-center justify-between py-4 md:py-6 w-full md:w-[80%] lg:w-[70%] mx-auto shadow-2xl  border-gray-700 last:border-b-0 mb-5 md:mb-8  md:shadow-xl md:shadow-sky-100 sm:shadow-xl sm:shadow-sky-200 rounded-xl md:rounded-4xl px-4 md:px-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4 md:mb-0 text-center md:text-left">
          <img :src="item.image" alt="" class="w-24 h-24 md:w-32 md:h-32 rounded-3xl object-cover" />
          <div>
            <h3 class="font-bold text-lg md:text-xl text-gray-900">{{ item.name }}</h3>
            <p class="text-sm text-green-700 mt-1">
              قیمت محصول: {{ item.price.toLocaleString() }} تومان
            </p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-center gap-3 md:gap-4">
          <div class="flex items-center gap-3">  
            <button 
              @click="decrease(item.id)"
              :disabled="item.count <= 1"
              class="px-3 py-1 bg-yellow-400 text-white rounded-lg w-10 h-10 font-bold text-lg flex items-center justify-center hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
            > 
              - 
            </button>
            <span class="text-black font-bold text-lg w-8 text-center">{{ item.count }}</span>
            <button
              @click="incrementcount(item.id)"
              class="px-3 py-1 bg-green-500 text-white rounded-lg w-10 h-10 font-bold text-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
            >
              +
            </button>
          </div>
          <button       

            class="text-white text-sm bg-red-600 w-28 h-10 rounded-2xl px-3 hover:bg-red-700 cursor-pointer transition duration-300 flex items-center justify-center"
            @click="removecart(item.id)"
          >
            حذف از سبد
          </button>
        </div>
      </div>

      <div class="mt-8 md:mt-12 pt-6 border-t border-gray-300 text-right pr-0 md:pr-16 lg:pr-24">
        <p class="text-lg md:text-xl font-bold text-gray-800">
          مجموع سبد خرید :
          <span class="text-green-800 ml-2">{{ cart.totals.toLocaleString() }}</span>
          تومان
        </p>
      </div>
    </div>
  </div>
  <footerpage class="mt-20 md:mt-32"></footerpage>
</template>

<style scoped>
.rounded-4xl {
  border-radius: 2rem; 
}

.text-lg, .text-xl, .font-bold, .text-sm {
    font-family: 'Vazirmatn', sans-serif; 
}

.hover\:shadow-lg:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}


.w-28 {
    width: 7rem; 
}
.h-10 {
    height: 2.5rem; 
}

.w-10 {
    width: 2.5rem; 
}
.h-10 {
    height: 2.5rem; 
}


.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>
