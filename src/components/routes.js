import RiHome from './home/RiHome';
import RiProfile from './profile/RiProfile';
import RiExperience from './experience/RiExperience';
import RiHobbies from './hobbies/RiHobbies';
import RiFaq from './faq/RiFaq';

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
    path: '/faq',
    name: 'faq',
    component: RiFaq,
    data: {
      translationKey: 'faq'
    }
  }
];
