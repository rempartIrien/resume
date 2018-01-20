import RiHome from './home/RiHome';
import RiProfile from './profile/RiProfile';
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
    path: '/profile',
    name: 'profile',
    component: RiProfile,
    data: {
      translationKey: 'profile'
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
