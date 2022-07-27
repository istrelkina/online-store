import './index.html';
import './style.scss';

import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.arrow__right',
    prevEl: '.arrow__left',
  },
});

const swiperGold = new Swiper('.swiper-gold', {
  modules: [Navigation],
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.arrow__right-gold',
    prevEl: '.arrow__left-gold',
  },
});
