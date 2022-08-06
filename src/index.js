import './index.html';
import './style.scss';
import './modules/card-detail.js';

//Render cards
let dataArr;
let pref;
let title;
let section;
let cat;
import data from './data.json';

function createCards(prefix) {
  if (prefix) {
    dataArr = data['jumpers & cardigans'];
    pref = '-gold';
    title = 'JUMPERS & CARDIGANS';
    cat = 'jumpers & cardigans';
    section = document.querySelector('.goods-gold');
  } else {
    dataArr = data['dresses'];
    pref = '';
    title = 'All dresses';
    cat = 'dresses';
    section = document.querySelector('.goods-red');
  }

  dataArr.sort((a, b) => 0.5 - Math.random());
  console.log(dataArr);

  //create container
  let container = document.createElement('div');
  container.classList.add('container');
  section.appendChild(container);

  //div swiper
  let swiperBlock = document.createElement('div');
  swiperBlock.classList.add('swiper' + pref);

  //div goods__top
  let goodsTop = document.createElement('div');
  goodsTop.classList.add('goods__top');
  if (pref) {
    goodsTop.innerHTML = `<h2 class="title-line title-line_gold">${title}</h2>`;
  } else {
    goodsTop.innerHTML = `<h2 class="title-line">${title}</h2>`;
  }
  swiperBlock.appendChild(goodsTop);

  //cards
  let swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('goods__cards');
  swiperWrapper.classList.add('swiper-wrapper');

  dataArr.forEach((element) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('swiper-slide');
    //create cardPhoto
    let cardPhoto = document.createElement('div');
    cardPhoto.classList.add('card__photo');
    let linkImg = document.createElement('a');
    linkImg.classList.add('card__photo_link');
    let img = document.createElement('img');
    img.src = element.src;
    //img.src = `<%=require('./src/${element.src}')%>`;
    img.alt = element.src.slice(11, -5);
    img.classList.add('card__image');
    linkImg.appendChild(img);
    linkImg.href = '#';
    cardPhoto.appendChild(linkImg);
    card.appendChild(cardPhoto);
    //create link
    let link = document.createElement('a');
    link.classList.add('card__title-link');
    if (pref) link.classList.add('card__title-link_gold');
    link.href = '#';
    let textNode = document.createTextNode(element.title);
    link.appendChild(textNode);
    link.dataset.cat = cat;
    card.appendChild(link);
    //create price
    let price = document.createElement('div');
    price.classList.add('card__price');
    let textNodePrice = document.createTextNode('$' + element.price);
    price.appendChild(textNodePrice);
    card.appendChild(price);
    //create button
    let button = document.createElement('button');
    button.classList.add('btn__buy');
    if (pref) button.classList.add('btn__buy_gold');

    button.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>add to cart';
    card.appendChild(button);
    swiperWrapper.appendChild(card);
  });
  swiperBlock.appendChild(swiperWrapper);
  //create arrows
  let arrowLeft = document.createElement('div');
  arrowLeft.classList.add('arrow__left-gold');
  arrowLeft.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
  swiperBlock.appendChild(arrowLeft);
  let arrowRight = document.createElement('div');
  arrowRight.classList.add('arrow__right-gold');
  arrowRight.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
  swiperBlock.appendChild(arrowRight);

  container.appendChild(swiperBlock);
}

function searchArticul(str, title) {
  const searchData = data[str];
  const obj = searchData.filter((item) => {
    if (item.title === title) return item.id;
  });
  return obj[0].id;
}
function switchPage() {
  jhjh;
}
function createCardDetail(art) {
  switchPage();
  const card = document.querySelector('.card-detail');
}
function doAction(event) {
  if (event.target.classList.contains('card__title-link')) {
    event.preventDefault();
    let link = event.target;
    let articul = searchArticul(link.dataset.cat, link.innerHTML);
    //console.log(articul);
    createCardDetail(articul);
  }
}

//Sliders
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

if (document.querySelector('.goods')) {
  createCards('');
  createCards('gold');

  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
      nextEl: '.arrow__right',
      prevEl: '.arrow__left',
    },
  });

  const swiperGold = new Swiper('.swiper-gold', {
    modules: [Navigation],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
      nextEl: '.arrow__right-gold',
      prevEl: '.arrow__left-gold',
    },
  });
}

//change card.html on click
//document.addEventListener('click', doAction);
