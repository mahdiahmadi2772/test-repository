<template>
  <menuheader />
  <headerpage />
  <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-900 mt-7" id="productsbox">
    <h1
      class="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center sm:text-left relative"
    >
      محصولات باشگاه
    </h1>

    <div
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8"
    >
      <div
        class="flex flex-col items-center bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-fuchsia-300"
        v-for="item in products"
        :key="item.id"
      >
        <img
          :src="item.image"
          alt="محصول"
          class="w-full h-48 sm:h-56 object-cover"
        />
        <div class="p-4 w-full text-center">
          <h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            {{ item.name }}
          </h2>
          <div class="relative my-3">
            <div class="h-px w-16 bg-gray-400 mx-auto"></div>
          </div>
          <p class="text-green-700 font-bold text-md mb-1">
            قیمت: {{ item.price }} تومان
          </p>
          <p class="text-gray-600 text-sm mb-4">
            {{ item.description }}
          </p>

          <button
            class="w-full bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            @click="addtocart(item)"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
    <div v-if="error" class="text-red-500 text-center mt-8">
      خطا در بارگذاری محصولات: {{ error }}
    </div>
  </div>

  <footerpage class="mt-10"></footerpage>
</template>

<script setup>
import { ref, onMounted } from "vue";
import menuheader from "@/assets/component/menuheader.vue";
import headerpage from "@/assets/component/headerpage.vue";
import footerpage from "@/assets/component/footerpage.vue";
import { useCartproduct } from "@/store/shop";

const cart = useCartproduct();

function addtocart(product) {
  cart.addcart(product);
}

const products = ref([]);
const error = ref(null);

const GetProducts = async () => {
  try {

    const res = await fetch("http://127.0.0.1:8000/products/");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    products.value = data;
  } catch (err) {
    error.value = err.message || "خطای ناشناخته در دریافت محصولات";
    console.error("Failed to fetch products:", err);
  }
};

onMounted(GetProducts);
</script>

<style scoped>
.text-shadow-current {
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.rounded-4xl {
  border-radius: 2.5rem;
}
.hover\:shadow-fuchsia-100:hover {
  box-shadow: 0 4px 12px rgba(217, 73, 226, 0.2);
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
.hover\:shadow-fuchsia-300:hover {
  box-shadow: 0 10px 20px rgba(217, 73, 226, 0.3);
}
.transition-shadow {
  transition-property: box-shadow;
}

.bg-pink-700 {
  background-color: #9d174d;
}
.bg-fuchsia-700 {
  background-color: #c026d3;
}
.bg-fuchsia-800:hover {
  background-color: #a21caf;
}
.text-fuchsia-600 {
  color: #af26c4;
}
.bg-fuchsia-300 {
  --tw-shadow-color: rgba(217, 73, 226, 0.3);
}
</style>
