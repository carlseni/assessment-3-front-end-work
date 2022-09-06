const randomRestaurant = document.querySelector('#random-restaurant');
const restaurantSiteArr = [
  'https://www.tucanos.com/location/boi/',
  'https://crumblcookies.com/boise/',
 ];

randomRestaurant.addEventListener('click', () => {
  let random = Math.floor(Math.random() * restaurantSiteArr.length);
  window.open(restaurantSiteArr[random]);
});
