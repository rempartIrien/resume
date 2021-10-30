import Experience from './components/experience/Experience.vue';
import Faq from './components/faq/Faq.vue';
import Hobbies from './components/hobbies/Hobbies.vue';
import Home from './components/home/Home.vue';
import Profile from './components/profile/Profile.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    data: {
      translationKey: 'menu.home'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    data: {
      translationKey: 'menu.profile'
    }
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
    data: {
      translationKey: 'menu.experience'
    }
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: Hobbies,
    data: {
      translationKey: 'menu.hobbies'
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq,
    data: {
      translationKey: 'menu.faq'
    }
  }
];
