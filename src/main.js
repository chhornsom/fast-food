import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/scss/_style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).mount('#app');
