import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/scss/_style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBook,
  faUser,
  faUsers,
  faUserSecret,
  faKey,
  faEye,
  faEyeSlash,
  faPenToSquare,
  faLockOpen,
  faArrowRightFromBracket,
  faMagnifyingGlassArrowRight,
  faSearch,
  faGears,
  faCloudArrowUp,
  faCloudArrowDown,
  faPlus,
  faCircleXmark,
  faPrint,
  faUnlock,
  faArrowTrendUp,
  faBars,
  faRotate,
  faHeadset,
  fas
} from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faBook);
library.add(faUser);
library.add(faUsers);
library.add(faUserSecret);
library.add(faKey);
library.add(faEye);
library.add(faEyeSlash);
library.add(faPenToSquare);
library.add(faLockOpen);
library.add(faArrowRightFromBracket);
library.add(faMagnifyingGlassArrowRight);
library.add(faSearch);
library.add(faGears);
library.add(faCloudArrowUp);
library.add(faCloudArrowDown);
library.add(faPlus);
library.add(faCircleXmark);
library.add(faPrint);
library.add(faUnlock);
library.add(faArrowTrendUp);
library.add(faBars);
library.add(faSearch);
library.add(faRotate);
library.add(faHeadset);
library.add(fas);
createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
