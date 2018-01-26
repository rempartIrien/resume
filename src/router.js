import Vue from 'vue';
import Router from 'vue-router';
import ROUTES from './components/routes';

Vue.use(Router);
export default new Router({
  routes: ROUTES,
  scrollBehavior(to, from, savedPosition) {
    if (!savedPosition) {
      // See https://github.com/vuejs/vue-router/issues/1187
      document.querySelector('.ri-app__container').scrollTo(0, 0);
      return { x: 0, y: 0 };
    }
    return savedPosition;
  }
});
