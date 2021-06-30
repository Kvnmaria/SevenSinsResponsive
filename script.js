'use strict';

const btnGrid = document.querySelector('.btn-grid');
const btnFlex = document.querySelector('.btn-flex');
const hidden = document.querySelector('.hidden');
const hiddenGrid = document.querySelector('.hidden-1');


btnGrid.addEventListener('click', function () {

    hidden.style.display = 'none';
    hiddenGrid.classList.remove('hidden-1');
})

btnFlex.addEventListener('click', function () {

    hiddenGrid.classList.add('hidden-1');
    hidden.style.display = 'contents';

})
