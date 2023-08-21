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
let currentSlide = 0;

const dots = document.querySelectorAll ('.dot');
const bannerP = document.querySelector('.banner-p');
const bannerSlide = document.querySelector('.banner-img')

const left = document.querySelector ('.arrow_left');
console.log(left);

const right = document.querySelector ('.arrow_right');
console.log(right);

/***Functions***/

function activeDots()
{
	dots.forEach((dot,index) =>
	{
		dot.classList.remove("dot_selected");
		if (index === currentSlide)
		{
			dot.classList.add("dot_selected");
		}
	}
	)
}
function moveLeft()
{
	activeDots();
    currentSlide = (currentSlide - 1) ;
    bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
}


function moveRight()
{
	activeDots();
	currentSlide = (currentSlide + 1);
	bannerSlide.src = "./assets/images/slideshow/" + slides[currentSlide].image;
}

/***Event***/

left.addEventListener('click',moveLeft);
right.addEventListener('click',moveRight);
