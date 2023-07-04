// swiper.js
const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  watchOverflow: false,
  freeMode: false,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// hamburger menu / mobile
const hamburger = document.querySelector(".hamburger"),
  quit = document.querySelector(".quit"),
  mobileMenu = document.querySelector(".mobileMenu");

// animation
const duration = () => {
  mobileMenu.classList.add("transition-all");
  mobileMenu.classList.add("duration-300");
};

const openMenu = () => {
  mobileMenu.classList.remove("invisible");
  mobileMenu.classList.add("visible");
  mobileMenu.classList.remove("-right-[999px]");
  mobileMenu.classList.add("right-0");
  duration();
};

const quitMenu = () => {
  mobileMenu.classList.remove("visible");
  mobileMenu.classList.add("invisible");
  mobileMenu.classList.add("-right-[999px]");
  mobileMenu.classList.remove("right-0");
  duration();
};

hamburger.addEventListener("click", openMenu);
quit.addEventListener("click", quitMenu);

// filter cards
const buttons = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");

const filterGroup = (e) => {
  const filterDataName = e.target.dataset.name;
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  cards.forEach((card) => {
    card.classList.add("hidden");

    if (filterDataName === card.dataset.name || filterDataName === "all") {
      card.classList.remove("hidden");
    }
  });
};
buttons.forEach((button) => button.addEventListener("click", filterGroup));

// Item Change Image
const mainImage = document.querySelector(".main-img");
const smallImg = document.querySelectorAll(".small-img");

const changeImage = (e) => {
  mainImage.src = e.target.src;
};
smallImg.forEach((img) => img.addEventListener("click", changeImage));

// add a comment
const itemInfo = document.querySelector(".item-info");
const review = document.querySelector(".item-review");
const itemContainer = document.querySelector(".item-container");
const reviewContainer = document.querySelector(".review-container");

const showReview = () => {
  reviewContainer.classList.remove("hidden");
  itemContainer.classList.add("hidden");
  itemInfo.classList.remove("active-text");
  review.classList.add("active-text");
};

const showItemDetails = () => {
  reviewContainer.classList.add("hidden");
  itemContainer.classList.remove("hidden");
  itemInfo.classList.add("active-text");
  review.classList.remove("active-text");
};

// filter dasboard
const accountButtons = document.querySelectorAll(".account-btn");
const accountCards = document.querySelectorAll(".account-card");

console.log(accountButtons);

const filterDashboard = (e) => {
  const filterDataName = e.target.dataset.name;
  console.log(filterDataName);
  console.log(e.target);
  document.querySelector(".active-btn").classList.remove("active-btn");
  e.target.classList.add("active-btn");

  accountCards.forEach((card) => {
    card.classList.add("hidden");

    if (filterDataName === card.dataset.name || filterDataName === "all") {
      card.classList.remove("hidden");
    }
  });
};
accountButtons.forEach((button) =>
  button.addEventListener("click", filterDashboard)
);

review.addEventListener("click", showReview);
itemInfo.addEventListener("click", showItemDetails);
