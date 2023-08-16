const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left = document.querySelector ('.arrow_left');
console.log(left);

const right = document.querySelector ('.arrow_right');
console.log(right);

function moveLeft(){
	alert('Tu as cliqué sur la flèche gauche');
	console.log('Tu as cliqué sur la flèche gauche');
}

left.addEventListener('click',moveLeft);

function moveRight(){
	alert('Tu as cliqué sur la flèche droite');
	console.log('Tu as cliqué sur la flèche droite');
}
right.addEventListener('click',moveRight);
