import RiHome from './home/RiHome';
import RiBio from './bio/RiBio';
import RiExperience from './experience/RiExperience';
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
    path: '/experience',
    name: 'experience',
    component: RiExperience,
    data: {
      translationKey: 'experience'
    }
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: RiHobbies,
    data: {
      translationKey: 'hobbies'
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
