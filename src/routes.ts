import { RouteRecordRaw } from 'vue-router';

import Experience from './components/experience/Experience.vue';
import Faq from './components/faq/Faq.vue';
import Hobbies from './components/hobbies/Hobbies.vue';
import Home from './components/home/Home.vue';
import Profile from './components/profile/Profile.vue';

export type RealRoute = RouteRecordRaw & { meta: { translationKey: string } };

export const routes: RealRoute[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      translationKey: 'menu.home'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      translationKey: 'menu.profile'
    }
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
    meta: {
      translationKey: 'menu.experience'
    }
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: Hobbies,
    meta: {
      translationKey: 'menu.hobbies'
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq,
    meta: {
      translationKey: 'menu.faq'
    }
  }
];

const catchAllRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  redirect: '/'
};

export default (routes as RouteRecordRaw[]).concat(catchAllRoute);
