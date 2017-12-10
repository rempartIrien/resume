import RiHome from './home/RiHome';
import RiBio from './bio/RiBio';
import RiWork from './work/RiWork';
import RiHobbies from './hobbies/RiHobbies';
import RiWhy from './why/RiWhy';

export default [
  {
    path: '/',
    name: 'home',
    component: RiHome,
    data: {
      translationKey: 'home'
    }
  },
  {
    path: '/bio',
    name: 'bio',
    component: RiBio,
    data: {
      translationKey: 'bio'
    }
  },
  {
    path: '/work',
    name: 'work',
    component: RiWork,
    data: {
      translationKey: 'work'
    }
  },
  {
    path: '/hobby',
    name: 'hobby',
    component: RiHobbies,
    data: {
      translationKey: 'hobby'
    }
  },
  {
    path: '/why',
    name: 'why',
    component: RiWhy,
    data: {
      translationKey: 'why'
    }
  }
];
