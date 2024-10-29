import FavoriteRestoranIdb from '../../data/favorite-restoran-idb';
import { createRestaurantItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="latest">
        <h2 class="latesthead">Restoran Favorit</h2>
    </div>
    <div id="content" class="content"></div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestoranIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#content');

    if (resto.length) {
      resto.forEach((restos) => {
        restaurantContainer.innerHTML += createRestaurantItem(restos);
      });
    } else {
      restaurantContainer.innerHTML = `
      <div class="restaurant-item__not__found">Tidak ada restoran yang ditambahkan ke favorit</div>
      `;
    }
  },
};

export default Favorite;
