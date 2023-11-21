const priceOne = document.getElementById('price_k').innerHTML = 234;
const priseTwo = document.getElementById('price_c').innerHTML = 420;
const priceThree = document.getElementById('price_s').innerHTML = 204;
const priceFour = document.getElementById ('price_b').innerHTML= 34;

const totalPrice = document.getElementById('totalPrice');
const btn = document.getElementById('btn');

const priceOneNumber = +priceOne;
const priseTwoNumber = +priseTwo;
const priceThreeNumber = +priceThree;
const priceFourNumber = +priceFour;

const totalPriceNumber = priceOneNumber + priseTwoNumber + priceThreeNumber +priceFourNumber ;
totalPrice.textContent = totalPriceNumber + ' руб.';

 function discount(){
  const dis = totalPriceNumber - (totalPriceNumber * 0.2);
  totalPrice.textContent = dis + ' руб.';
 }

 btn.addEventListener('click', discount);