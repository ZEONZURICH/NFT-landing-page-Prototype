// Header Animation
let scrollpos = window.scrollY
const header = document.querySelector(".site-header")
const objectSelect = document.querySelector(".hero")
const objectPosition = objectSelect.offsetTop

const add_class_on_scroll = () => header.classList.add("active-header")
const remove_class_on_scroll = () => header.classList.remove("active-header")

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY

  if (scrollpos > objectPosition) {
    add_class_on_scroll()
  } else {
    remove_class_on_scroll()
  }
})

// Mobile Menu
let mobileIcons = document.querySelector(".mobile-icons")
let mobileButtons = document.querySelector(".hamburger")

let menuIcon = document.querySelector(".menu-icon")
let mobileMenu = document.querySelector(".navbar")
let bodyClass = document.querySelector("body")

function toggleMenuCLasses() {
  mobileMenu.classList.toggle("mobile-open")
  bodyClass.classList.toggle("menu-fixed")
}

mobileButtons.addEventListener("click", toggleMenuCLasses)

// Slider
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".arrow-next",
    prevEl: ".arrow-prev",
  },
})

// Scroll Animation

ScrollReveal().reveal(".star-top", { delay: 400 })
ScrollReveal().reveal(".hero-content-text", { delay: 400 })
ScrollReveal().reveal(".hero-content-img-area, .platform-images", {
  delay: 500,
})
ScrollReveal().reveal(".best-art-img", { delay: 500 })

ScrollReveal().reveal(".features-grid-container", {
  delay: 400,
  distance: "50px",
  duration: 2000,
})

ScrollReveal().reveal(".features-heading, .best-art-title, .platform-title,", {
  delay: 400,
  distance: "50px",
  duration: 2000,
})

ScrollReveal().reveal(".best-art-p, .platform-p", {
  delay: 400,
  distance: "50px",
  duration: 2000,
})

ScrollReveal().reveal(".footer", {
  delay: 200,
  opacity: 0,
  duration: 2000,
})
