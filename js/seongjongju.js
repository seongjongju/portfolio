$(document).ready(function() {
    const header = $('header');
    const closeBtn = $('.closeBtn');
    const openBtn = $('.openBtn');

    openBtn.on('click', function(e) {
        e.preventDefault();
        header.fadeIn();
    })

    closeBtn.on("click", function(e) {
        e.preventDefault();
        header.fadeOut();
    });
});

const menus = document.querySelectorAll('nav > a');
console.log()

window.addEventListener('scroll', function(e) {
    e.preventDefault();
    const openBtn = document.querySelector('.openBtn');
    let windowY = window.scrollY;

    if(windowY > 832) {
        openBtn.style.top = '-100%'
    } else {
        openBtn.style.top = '10px'
    }
})
    
var swiper = new Swiper(".design_Swiper", {});





