import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import {
    Home,
    Teleport,
    Fragments,
    Suspense,
    Experimental,
    PageNotFound
} from '../views';

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/teleport',
    name: 'Teleport',
    component: Teleport
}, {
    path: '/fragments',
    name: 'Fragments',
    component: Fragments
},{
    path: '/suspense',
    name: 'Suspense',
    component: Suspense
},{
    path: '/experimental',
    name: 'Experimental',
    component: Experimental
}, {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
}, {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
