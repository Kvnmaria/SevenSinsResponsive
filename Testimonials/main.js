const mariaSimma = document.querySelector('.mariaSimma');
const faustina = document.querySelector('.faustina');
const johnBosco = document.querySelector('.johnBosco')
const content_1 = document.querySelector('.content-1');
const content_2 = document.querySelector('.content-2');
const content_3 = document.querySelector('.content-3');



mariaSimma.addEventListener('click', function () {

    content_1.style.display = 'block'
    content_2.classList.add('hidden-2');
    content_3.classList.add('hidden-3')

})

faustina.addEventListener('click', function () {

    content_1.style.display = 'none';
    content_2.classList.remove('hidden-2');
    content_3.classList.add('hidden-3')

})


johnBosco.addEventListener('click', function () {

    content_1.style.display = 'none'
    content_2.classList.add('hidden-2');
    content_3.classList.remove('hidden-3')

})