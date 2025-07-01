import { defineStore } from "pinia";
import { ref, watch, nextTick } from "vue";
export const useCartproduct = defineStore("cart", () => {
  const items = ref([]);
  const totals = ref(0);




  const savedCart = localStorage.getItem("cartItems");

  if (savedCart) {
    items.value = JSON.parse(savedCart);
    nextTick(() => {
      sumprice();
    });
  }

  watch(
    items,
    (newItems) => {
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    },
    { deep: true }
  );

  const addcart = (product) => {
    const exist = items.value.find((item) => item.id == product.id);
    if (exist) {
      alert("محصول مورد نظر قبلا در سبد خرید اضافه شده");
      exist.count += 1;
    } else {
      alert("محصول مورد نظر در سبد خرید اضافه شد ");
      items.value.push({ ...product, count: 1 });
      sumprice()
    }
    
  };

  const removeitem = (productid) => {
    let text = confirm("آیا از حذف محصول در سبد خرید اطمینان دارید ؟");
    if (text == true) {
      items.value = items.value.filter((item) => item.id != productid);
    }
    sumprice()
  };

  const increment = (productId) => {
    const product = items.value.find((item) => item.id === productId);
    if (product) {
      product.count++;
    }
    sumprice();
  };

  const decreaseCount = (productId) => {
    const product = items.value.find((item) => item.id === productId);
    if (product && product.count > 1) {
      product.count--;
    } else if (product && product.count === 1) {
      removeitem(productId);
    }
    sumprice();
  };

  const sumprice = () => {
    totals.value = items.value.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  };

  return {
    items,
    totals,
    addcart,
    removeitem,
    sumprice,
    increment,
    decreaseCount,
  
  };
});
