function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "img/close_white_36dp.svg";
  }
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-button").style.display = "block";
  } else {
    document.getElementById("top-button").style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Adiciona o efeito de rolagem suave
  });
}

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".carousel-images .card-img");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

setInterval(function () {
  nextSlide();
}, 4000);

showSlides();

var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1188: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

////
const btnDogs = document.getElementById("btnDogs");
const btnCats = document.getElementById("btnCats");
const products = document.querySelectorAll(".product");

btnDogs.addEventListener("click", () => {
  btnDogs.classList.add("active");
  btnCats.classList.remove("active");
  products.forEach((product) => {
    if (product.classList.contains("dog")) {
      product.classList.add("active");
    } else {
      product.classList.remove("active");
    }
  });
});

btnCats.addEventListener("click", () => {
  btnCats.classList.add("active");
  btnDogs.classList.remove("active");
  products.forEach((product) => {
    if (product.classList.contains("cat")) {
      product.classList.add("active");
    } else {
      product.classList.remove("active");
    }
  });
});

// DEPOIMENTOS

// FAQ

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    // Fechar todos os outros
    accordions.forEach((acc) => {
      const body = acc.querySelector(".accordion-body");
      if (body !== accordion.querySelector(".accordion-body")) {
        body.classList.remove("active");
      }
    });

    // Alternar o estado do atual
    const body = accordion.querySelector(".accordion-body");
    body.classList.toggle("active");
  });
});
