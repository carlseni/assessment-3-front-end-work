console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', () => {
	let randomListNum = Math.ceil(Math.random() * ul.childNodes.length);
	if (randomListNum % 2 === 1) {
	  alert(ul.childNodes[randomListNum].textContent);
	} else {
	  randomListNum--;
	  alert(ul.childNodes[randomListNum].textContent);
	}
  });