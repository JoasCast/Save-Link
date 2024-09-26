import { createRouter, createWebHistory } from 'vue-router/auto'
import {getAuth, onAuthStateChanged} from "firebase/auth";
const routes = [
  {
    path: "/",
    component: () => import("@/pages/HomeView.vue"),
    meta:{
      requiresAuth: true,
    }
  },
  { path: "/iniciar", component: () => import("@/pages/IniciarView.vue") },
  { path: "/recuperar", component: () => import("@/pages/RecuperarView.vue") },
  { path: "/login", component: () => import("@/pages/LoginView.vue") },
  { path: "/cadastrar", component: () => import("@/pages/CadastrarView.vue") },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user)=> {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    }else{
      alert("you dont have access!")
      next('/iniciar');
    }
  }else {
    next();
  }
})

export default router
