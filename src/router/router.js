import { createRouter, createWebHistory, RouterLink } from "vue-router";
import mainpage from "@/assets/component/mainpage.vue";
import massagepage from "@/assets/component/massagepage.vue";
import products from "@/assets/component/products.vue";
import NotFound from "@/assets/component/NotFound.vue";
import login from "@/assets/component/login.vue";
import register from "@/assets/component/register.vue";
import Exerciseprogram from "@/assets/component/Exerciseprogram.vue";
import Coach from "@/assets/component/Coach.vue";
import Equipment from "@/assets/component/Equipment.vue";
import blogs from "@/assets/component/blogs.vue";
import shopping from "@/assets/component/shopping.vue";
import blog from "@/assets/component/blog.vue";
import productlist from "@/assets/component/admin-panel/productlist.vue";
import add_product from "@/assets/component/admin-panel/add_product.vue";
import panelpage from "@/assets/component/admin-panel/panelpage.vue";
import UsersList from "@/assets/component/admin-panel/UsersList.vue";
import add_user from "@/assets/component/admin-panel/add_user.vue";
import update_user from "@/assets/component/admin-panel/update_user.vue";
import dropdown from "@/assets/component/dropdown.vue";
const routes = [
  { path: "/mainpage", component: mainpage },
  { path: "/massagepage", component: massagepage },
  { path: "/products", component: products },
  { path: "/login", component: login },
  { path: "/register", component: register },
  { path: "/program", component: Exerciseprogram },
  { path: "/Coach", component: Coach },
  { path: "/Equipment", component: Equipment },
  { path: "/", component: blogs },
  { path: "/blog/:id", component: blog },
  { path: "/shopping", component: shopping },
  { path: "/productlist", component: productlist },
  { path: "/add_product", component: add_product },
  { path: "/panelpage", component: panelpage },
  { path: "/UsersList", component: UsersList },
  { path: "/add_user", component: add_user },
  { path: "/update_user", component: update_user },
  { path: "/dropdown", component: dropdown },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
