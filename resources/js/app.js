/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory  } from 'vue-router';
import store from './store';
import routes from './routes';

import Welcome from './components/Welcome.vue';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(Welcome)
.use(store)
.use(router)
.mount('#app');
