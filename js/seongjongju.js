const header = document.querySelector("header");
console.log(header)

window.addEventListener('scroll', function() {
    let windowScrollY = window.scrollY;
    console.log(windowScrollY)
    if(windowScrollY > 1080) {
        header.style.color = "#000"
    } else {
        header.style.color = "#fff"
    }
});
var swiper = new Swiper(".design_Swiper", {});