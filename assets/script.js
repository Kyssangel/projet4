const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const imgBanner = document.querySelector(".banner-img");
const pBanner = document.querySelector("#banner p");
const dots = document.querySelector(".dots")

let index = 0;

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

slides.forEach((item, i) => {
  const dot = document.createElement('span')
  dot.classList.add('dot')

  if (i === index) {
    dot.classList.add('dot_selected')
  }

  dot.addEventListener('click', () => {
    index = i;

    imgBanner.src = "./assets/images/slideshow/" + slides [index].image;
    pBanner.innerHTML = slides [index].tagLine;
    changeCSSdotsElements()
  })

  dots.appendChild(dot)
})

const changeCSSdotsElements = () => {
  const allDots = document.querySelectorAll('.dot')

  allDots.forEach((dot, i) => {
    dot.classList.remove('dot_selected')
    if (i === index) {
      dot.classList.add('dot_selected')
    }
  })

}

arrow_left.addEventListener("click", function () {
  index = index - 1;
  if (index < 0) {
    index = slides.length - 1;
  }

  imgBanner.src = "./assets/images/slideshow/" + slides [index].image;
  pBanner.innerHTML = slides [index].tagLine;
  changeCSSdotsElements()
});

arrow_right.addEventListener("click", function () {
  index = index + 1;

  if (index > slides.length - 1) {
    index = 0;
  }

  imgBanner.src = "./assets/images/slideshow/" + slides [index].image;
  pBanner.innerHTML = slides [index].tagLine;
  changeCSSdotsElements()
});





