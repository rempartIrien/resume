import { App as VueApp, createApp } from 'vue';

import App from './App.vue';
import { createI18n } from './i18n';
import router from './router';

const app: VueApp = createApp(App);

app.use(createI18n());
app.use(router);

app.mount('#app');
