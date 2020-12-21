import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'ress/dist/ress.min.css';
import './assets/index.scss';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
