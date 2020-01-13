'use strict';

const products = [
  {id: 1, title: 'Notebook', picture: './img/notebook.jpg', price: 20000},
  {id: 2, title: 'Mouse', picture: './img/mouse.jpg', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', picture: './img/pad.jpg', price: 4500},
];

const renderProduct = (title, picture ='http://via.placeholder.com/100x75.jpg', price) => {
  return `<div class="product-item">
            <h3 class="h3">${title}</h3>
            <img src="${picture}" alt="" class="product-img">
            <p class="p">${price} рублей</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = list => {
  const productList = list.map(product => renderProduct(product.title, product.picture, product.price)).join('');
  console.log(productList);
  document.querySelector('.products').innerHTML = productList;
};

renderProducts(products);
