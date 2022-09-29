"use strict";
const productImg = document.querySelector(".productImg");
const productImg1 = document.querySelector(".productImg1");
const productImg2 = document.querySelector(".productImg2");
const productImg3 = document.querySelector(".productImg3");
const productImg4 = document.querySelector(".productImg4");
const productImg5 = document.querySelector(".productImg5");
const productImg6 = document.querySelector(".productImg6");
const productImg7 = document.querySelector(".productImg7");
const productImg8 = document.querySelector(".productImg8");
const productImg9 = document.querySelector(".productImg9");
const productImg10 = document.querySelector(".productImg10");
const productImg11 = document.querySelector(".productImg11");
const allSmallImg = document.querySelectorAll(".img-small");
const allSmall1 = document.querySelectorAll(".small1");
const allSmall2 = document.querySelectorAll(".small2");
const allSmall3 = document.querySelectorAll(".small3");
const allSmall4 = document.querySelectorAll(".small4");
const allSmall5 = document.querySelectorAll(".small5");
const allSmall6 = document.querySelectorAll(".small6");
const allSmall7 = document.querySelectorAll(".small7");

const allSmall8 = document.querySelectorAll(".small8");
const allSmall9 = document.querySelectorAll(".small9");
const allSmall10 = document.querySelectorAll(".small10");
const allSmall11 = document.querySelectorAll(".small11");
const femaleTrousers = document.querySelectorAll(".female-link");
const femaleContainer = document.querySelector(".set");
const productRow = document.querySelector(".product-row");
const closeCart = document.querySelector(".closeCart");
const closeCart1 = document.querySelector(".closeCart1");
const closeCart2 = document.querySelector(".closeCart2");
const closeCart3 = document.querySelector(".closeCart3");
const closeCart4 = document.querySelector(".closeCart4");
const closeCart5 = document.querySelector(".closeCart5");
const closeCart6 = document.querySelector(".closeCart6");
const closeCart7 = document.querySelector(".closeCart7");
const closeCart8 = document.querySelector(".closeCart8");
const closeCart9 = document.querySelector(".closeCart9");
const closeCart10 = document.querySelector(".closeCart10");
const closeCart11 = document.querySelector(".closeCart11");
const maleTrouser = document.querySelectorAll(".male-link");
const productRow1 = document.querySelector(".row1");
const productRow2 = document.querySelector(".row2");
const productRow3 = document.querySelector(".row3");
const productRow4 = document.querySelector(".row4");
const productRow5 = document.querySelector(".row5");
const productRow6 = document.querySelector(".row6");
const productRow7 = document.querySelector(".row7");
const productRow8 = document.querySelector(".row8");
const productRow9 = document.querySelector(".row9");
const productRow10 = document.querySelector(".row10");
const productRow11 = document.querySelector(".row11");
const display = document.querySelector(".stock");
const vintage = document.querySelectorAll(".vintage-link");
const footWear = document.querySelector(".foot-link");
const sneakers = document.querySelectorAll(".sneaker-link");
const givenchy = document.querySelector(".givenchy-link");
const dinnerGown = document.querySelector(".dinner-link");
const designerShirt = document.querySelector(".shirt-link");
const bag = document.querySelector(".bag-link");
const femaleGown = document.querySelectorAll(".female-gown-link");
const blackGown = document.querySelector(".black-dinner-link");
const heels = document.querySelector(".heel-link");

console.log(allSmall4);
// console.log(allSmallImg);
// PRODUCT IMAGE
//////////////////////
allSmallImg.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg.src = img.src;
  });
});

///////////////////////////
allSmall1.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg1.src = img.src;
  });
});
///////////////////////////
allSmall2.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg2.src = img.src;
  });
});
/////////////////////////////
allSmall3.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg3.src = img.src;
  });
});
/////////////////////////////
allSmall4.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg4.src = img.src;
  });
});
/////////////////////////
allSmall5.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg5.src = img.src;
  });
});
//////////////////////////////
allSmall6.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg6.src = img.src;
  });
});
///////////////////////////////
allSmall7.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg7.src = img.src;
  });
});
///////////////////////////////
allSmall8.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg8.src = img.src;
  });
});
///////////////////////////////
allSmall8.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg8.src = img.src;
  });
});
////////////////////////////////
allSmall9.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg9.src = img.src;
  });
});
//////////////////////////////
allSmall10.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg10.src = img.src;
  });
});
/////////////////////////////////
allSmall11.forEach((img) => {
  img.addEventListener("click", function (e) {
    productImg11.src = img.src;
  });
});
// smallImg[0].onclick = function () {
//   productImg.src = smallImg[0].src;
// };

// smallImg[1].onclick = function () {
//   productImg.src = smallImg[1].src;
// };

// smallImg[2].onclick = function () {
//   productImg.src = smallImg[2].src;
// };

// smallImg[3].onclick = function () {
//   productImg.src = smallImg[3].src;
// };
/////////////////////////////////
femaleTrousers.forEach((female) => {
  female.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    console.log(clicked);
    productRow.classList.add("product-active");
    document.querySelector(".overlay").classList.remove("hidden");
  });
});
////////////////////////////////////
closeCart.addEventListener("click", (e) => {
  e.preventDefault();
  productRow.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
  console.log("gfhjmnmb");
});
/////////////////////////////////////////
maleTrouser.forEach((male) => {
  male.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    console.log(clicked);
    productRow1.classList.add("product-active");
    document.querySelector(".overlay").classList.remove("hidden");
    display.scrollIntoView({ behavior: "smooth" });
  });
});

closeCart1.addEventListener("click", () => {
  productRow1.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
//////////////////////////////////
vintage.forEach((male) => {
  male.addEventListener("click", (e) => {
    e.preventDefault();
    const clicked = e.target;
    console.log(clicked);
    productRow2.classList.add("product-active");
    document.querySelector(".overlay").classList.remove("hidden");
    display.scrollIntoView({ behavior: "smooth" });
  });
});

closeCart2.addEventListener("click", () => {
  productRow2.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});

////////////////////////////////////
footWear.addEventListener("click", (e) => {
  e.preventDefault();
  productRow3.classList.add("product-active");
  document.querySelector(".overlay").classList.remove("hidden");
  display.scrollIntoView({ behavior: "smooth" });
});

closeCart3.addEventListener("click", () => {
  productRow3.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
/////////////////////////////
sneakers.forEach((sneaker) => {
  sneaker.addEventListener("click", () => {
    productRow4.classList.add("product-active");
    document.querySelector(".overlay").classList.remove("hidden");
    display.scrollIntoView({ behavior: "smooth" });
  });
});

closeCart4.addEventListener("click", () => {
  productRow4.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
/////////////////////////////
givenchy.addEventListener("click", (e) => {
  e.preventDefault();
  productRow5.classList.add("product-active");
  document.querySelector(".overlay").classList.remove("hidden");
  display.scrollIntoView({ behavior: "smooth" });
});
closeCart5.addEventListener("click", () => {
  productRow5.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
/////////////////////////
dinnerGown.addEventListener("click", (e) => {
  e.preventDefault();
  productRow6.classList.add("product-active");
  document.querySelector(".overlay").classList.remove("hidden");
  display.scrollIntoView({ behavior: "smooth" });
});
closeCart6.addEventListener("click", () => {
  productRow6.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
//////////////////////////////
designerShirt.addEventListener("click", (e) => {
  e.preventDefault();
  productRow7.classList.add("product-active");
  document.querySelector(".overlay").classList.remove("hidden");
  display.scrollIntoView({ behavior: "smooth" });
});
closeCart7.addEventListener("click", () => {
  productRow7.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
//////////////////////////////////////
bag.addEventListener("click", (e) => {
  e.preventDefault();
  productRow8.classList.add("product-active");
  document.querySelector(".overlay").classList.remove("hidden");
  display.scrollIntoView({ behavior: "smooth" });
});
closeCart8.addEventListener("click", () => {
  productRow8.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
/////////////////////////////
femaleGown.forEach((fem) => {
  fem.addEventListener("click", (e) => {
    e.preventDefault();
    productRow9.classList.add("product-active");
    document.querySelector(".overlay").classList.remove("hidden");
    display.scrollIntoView({ behavior: "smooth" });
  });
});
closeCart9.addEventListener("click", () => {
  productRow9.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
//////////////////////
blackGown.addEventListener("click", (e) => {
  e.preventDefault();
  productRow10.classList.add("product-active");
  document.querySelector(".overlay").classList.remove("hidden");
  display.scrollIntoView({ behavior: "smooth" });
});
closeCart10.addEventListener("click", () => {
  productRow10.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
//////////////////////////
heels.addEventListener("click", (e) => {
  e.preventDefault();
  productRow11.classList.add("product-active");
  document.querySelector(".overlay").classList.remove("hidden");
  display.scrollIntoView({ behavior: "smooth" });
});
closeCart11.addEventListener("click", () => {
  productRow11.classList.remove("product-active");
  document.querySelector(".overlay").classList.add("hidden");
});
