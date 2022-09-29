"use strict";
const nav = document.querySelector(".nav");
const open = document.querySelector(".open");
const close = document.querySelector(".fa-xmark");
// const productImg = document.getElementById("productImg");
// const smallImg = document.getElementsByClassName("img-small");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const indicator = document.getElementById("indicator");
const love = 20;
const imageTestimonial = document.querySelectorAll(".img");
const testimonialContent = document.querySelectorAll(".col-3");
const add = document.getElementById("one");
const contact = document.querySelector(".contact");
const contactLink = document.querySelector(".contact-link");
const imgContainer = document.querySelector(".images");
const account = document.querySelector(".account");
const row = document.querySelector(".row");
const aboutSection = document.querySelector(".brand");
const aboutLink = document.querySelector(".about-link");
const allSections = document.querySelectorAll("section");
console.log(allSections);

//NAV BAR
open.style.display = "block";
close.style.display = "none";
open.addEventListener("click", function () {
  nav.style.transform = "translateX(300px)";
  open.style.display = "none";
  close.style.display = "block";
  nav.style.visibility = "visible";
  document.querySelector(".overlay").classList.remove("hidden");
});

///////////////////////////////////////////

const closeNav = function () {
  nav.style.transform = "translateX(-300px)";
  close.style.display = "none";
  open.style.display = "block";
  // nav.style.visibility = "hidden";
};
closeNav();

///////////////////////////////////////////////
close.addEventListener("click", () => {
  closeNav();
  document.querySelector(".overlay").classList.add("hidden");
});

////////////////////////////////////////////
contactLink.onclick = function () {
  console.log("hgdsrj");
  contact.scrollIntoView({ behavior: "smooth" });
  document.querySelector(".overlay").classList.add("hidden");
  closeNav();
};
//////////////////////////////////

aboutLink.onclick = function (e) {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
  document.querySelector(".overlay").classList.add("hidden");
  closeNav();
};

document.querySelector(".overlay").addEventListener("click", () => {
  document.querySelector(".overlay").classList.toggle("hidden");
  closeNav();
  row.classList.remove("open-form");
  document.querySelector(".form-container").classList.remove("open-form");
  document.querySelector(".product-row").classList.remove("product-active");
  row.style.visibility = "hidden";
});

///////////////////////////////////////

// testimonials
imgContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".img");

  if (!clicked) return;

  imageTestimonial.forEach((img) => img.classList.remove("img-active"));
  clicked.classList.add("img-active");

  testimonialContent.forEach((con) => con.classList.remove("col-3-active"));

  document
    .querySelector(`.col-3-${clicked.dataset.tab}`)
    .classList.add("col-3-active");
});

///////////////////////////////////////

// login/register page
account.addEventListener("click", function (e) {
  e.preventDefault();
  row.classList.toggle("open-form");
  // row.style.visibility = "visible";
  document.querySelector(".overlay").classList.toggle("hidden");
  closeNav();
});
document.querySelector(".closeForm").addEventListener("click", function () {
  row.classList.remove("open-form");
  row.style.visibility = "hidden";
});

//////////////////////////////////////////

function signIn() {
  registerForm.style.transform = "translateX(400px)";
  loginForm.style.transform = "translateX(400px)";
  indicator.style.transform = "translateX(0px)";
}
function signUp() {
  registerForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(130px)";
}

/*
order.addEventListener("click", function () {
  console.log(love);
  highWaist.style.display = "block";
});
*/

// function addCart(one) {
//   if ((add.style.display = "block")) {
//     add.style.display = "none";
//   }
// }

// function remove() {
//   if ((add.style.display = "block")) {
//     add.style.display = "none";
//   }
// }
/////////////////////////
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  console.log(entry);
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  section.classList.add("section-hidden");
  sectionObs.observe(section);
});
