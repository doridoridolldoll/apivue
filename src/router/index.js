import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Join from "@/components/Join.vue";
import Login from "@/components/Login.vue";
import List from "@/components/List.vue";
import PageList from "@/components/PageList.vue";
import AuthView from "@/components/AuthView.vue";

const routes = [
  {path: "/", name: "Home1", component: Home},
  {path: "/apiserverex", name: "Home", component: Home},
  {path: "/join", name: "Join", component: Join},
  {path: "/login", name: "Login", component: Login},
  {path: "/list", name: "List", component: List},
  {path: "/pagelist", name: "PageList", component: PageList},
  {path: "/authView", name: "AuthView", component: AuthView},
]

const router = createRouter({history: createWebHistory(),routes,})

export default router;