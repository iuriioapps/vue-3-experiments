import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import {
    Home,
    Teleport,
    Fragments,
    About,
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
}, {
    path: '/about',
    name: 'About',
    component: About
}, {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
