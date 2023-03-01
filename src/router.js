import async from 'hbs/lib/async';
import {createRouter, createWebHistory} from 'vue-router';
import { useUserStore } from './stores/user';

import Home from './views/Home.vue';
import login from './views/Login.vue';
import register from './views/Register.vue';

const requireAuth = async(to, from, next ) => {
    const useStore = useUserStore();
    useUserStore.loadingSession = true;
    const user = await useStore.currentUser();
    if (user) {
        next();
    }else{
        next('/login');
    }
    useUserStore.loadingSession = false;
}

const routes = [
    {path: '/', component: Home, beforeEnter: requireAuth},
    {path: '/login', component: login},
    {path: '/register', component: register},
]

const router = createRouter({
    routes,
    history : createWebHistory()
});
export default router;
