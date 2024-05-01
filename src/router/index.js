import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import FoodOrder from "../views/FoodOrder.vue";
import History from "../views/History.vue";
import Setting from "../views/Setting.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/food_order",
    name: "FoodOrder",
    component: FoodOrder
  },
  {
    path: "/history",
    name: "History",
    component: History
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting
  },
  
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active"
});

export default router;
