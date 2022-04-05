const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const cta = document.querySelector('.cta');

function toggleNav(){
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        cta.classList.toggle('cta-active');
    });
}

toggleNav();