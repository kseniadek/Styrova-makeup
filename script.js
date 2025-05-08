
// Початок КАРУСЕЛІ ---------------------------------------------------

let width = 112;
let count = 3;

let portfolio = document.querySelector('.serv-and-prices-page')

// let list = photoCarousel.querySelector('ul');
// let listElems = photoCarousel.querySelectorAll('li');

// let position = 0;


// photoCarousel.querySelector('.prev').onclick = function() {
//     position += width * count;
//     position = Math.min(position, 0)
//     list.style.marginLeft = position + 'px';
// };

// photoCarousel.querySelector('.next').onclick = function() {
//     position -= width * count;
//     position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + 'px';
// };

let list = portfolio.querySelector('ul');
let listElems = portfolio.querySelectorAll('li');

let position = 0;


portfolio.querySelector('.prev').onclick = function() {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

portfolio.querySelector('.next').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};


// Кінець КАРЕСЕЛІ -------------------------------------------------







