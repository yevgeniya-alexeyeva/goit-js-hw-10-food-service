import itemsTemplate from './templates/gallery-item.hbs';
import dishes from './menu.json';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(dishes);

galleryRef.insertAdjacentHTML('beforeend', markup);
