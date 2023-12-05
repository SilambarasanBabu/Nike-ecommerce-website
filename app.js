const wrapper = document.querySelector('.slideWrap');
const menus = document.querySelectorAll('.menu');
const products = [
   {
     id: 1,
     title: "Air Force",
     price: 199,
     colors: [
       {
         code: "black",
         img: "images/air.png",
       },
       {
         code: "darkblue",
         img: "images/air2.png",
       },
     ],
   },

   {
     id: 2,
     title: "Air Jordan",
     price: 149,
     colors: [
       {
         code: "lightgray",
         img: "images/jordan.png",
       },
       {
         code: "green",
         img: "images/jordan2.png",
       },
     ],
   },

   {
     id: 3,
     title: "Blazer",
     price: 109,
     colors: [
       {
         code: "lightgray",
         img: "images/blazer.png",
       },
       {
         code: "green",
         img: "images/blazer2.png",
       },
     ],
   },

   {
     id: 4,
     title: "Crater",
     price: 209,
     colors: [
       {
         code: "black",
         img: "images/crater.png",
       },
       {
         code: "lightgray",
         img: "images/crater2.png",
       },
     ],
   },

   {
     id: 5,
     title: "Hippie",
     price: 249,
     colors: [
       {
         code: "gray",
         img: "images/hippie.png",
       },
       {
         code: "black",
         img: "images/hippie2.png",
       },
     ],
   },
 ];


let choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');



menus.forEach ( (item,index) => {
     item.addEventListener('click', () => {

      //this line of code will change the slides
        wrapper.style.transform = `translatex(${-100 * index}vw)`;

      //this line of code will change the choosen products
        choosenProduct = products[index];

      //changing text contents in the choosen products
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = '$'+choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

      //assinging color of the products
         currentProductColors.forEach((color, index) => {
         color.style.backgroundColor = choosenProduct.colors[index].code;
        });
     });
});

//Assinging images of product based on color
currentProductColors.forEach((color,index) => {
  color.addEventListener('click',()=>{
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size,index)=>{
  size.addEventListener('click',()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor = 'white';
      size.style.color = 'black'
    });
    size.style.backgroundColor = 'black';
    size.style.color = 'white'
  });
});

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');


productButton.addEventListener('click',()=>{
   payment.style.display = 'flex';
});

close.addEventListener('click',()=>{
  payment.style.display = 'none';
});
