const color = document.querySelector('#color');
const place = document.querySelector('#place');
const band = document.querySelector('#band');

color.addEventListener('click', () => {
  alert('Blue');
});

place.addEventListener('click', () => {
  alert("Teton national park");
});

band.addEventListener('click', () => {
  alert('Bring me the horizon');
});
