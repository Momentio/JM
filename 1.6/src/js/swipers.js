import Swiper from 'swiper/bundle';

let categoryNames = ["brands", "technics", "price-list"];

let swipers = {};

window.addEventListener("load", initSwipers, true);
window.addEventListener("resize", initSwipers, true);

function initSwipers() {
    categoryNames.forEach(categoryName => {
        if(swipers[categoryName]){
            if(swipers[categoryName].destroy){
                swipers[categoryName].destroy();
            }
        }
    
        if(Number(document.body.offsetWidth) < 768){
            swipers[categoryName] = new Swiper(`.${categoryName}__swiper-container`, {
                pagination: {
                    clickable: true,
                    el: `.${categoryName}__swiper-pagination`,
                },
                direction: "horizontal",
                effect: "slide",
                speed: 666,
                slidesPerView: "auto",
            });
        }
    });
}