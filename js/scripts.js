// Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;


// Funções
function smoothScroll(e) {
    // console.log("teste");
    e.preventDefault();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll ({
        top: offsetTop,
        behavior: "smooth",
    });

    setTimeout(() => {
        if (menu.classList.contains("menu-active")) {
            menu.classList.remove("menu-active");
        }
    }, 500);
}

function showSlides(){
    console.log(slides);
    for(let i = 0; i < slides.length; i++){ 
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000);
}

// Eventos
[menuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active");
    });
});

allLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
});

// Inicialização
showSlides();

// Eventos alternativos:
/*
menuBtn.addEventListener("click", (e) => {
    menu.classList.add("menu-active");
});

closeMenuBtn.addEventListener("click", (e) => {
    menu.classList.remove("menu-active");
})*/