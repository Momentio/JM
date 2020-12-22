window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);

document.getElementById("brands__toggle-all").addEventListener(
    "click", toggleBrandsList, true
);

let dearSwiper;

function initSwiper() {
    // Пост покинут)
    if(dearSwiper){
        dearSwiper.destroy();
    }

    if(Number(document.body.offsetWidth) < 768){
        dearSwiper = new Swiper('.swiper-container', {
            pagination: {
                clickable: true,
                el: '.swiper-pagination',
            },
            loop: true,
            slidesPerView: 'auto',
        });
    }
}

function toggleBrandsList() {
    let divBrandsList = document.getElementById("brands-list");
    let buttonToggleBrandsList = document.getElementById("brands__toggle-all");

    let currentBrandsListClass = divBrandsList.className;

    if(currentBrandsListClass.includes(
        "brands-list__container--height--min"
    )){
        divBrandsList.className =
            currentBrandsListClass.replace(
                " brands-list__container--height--min", ""
            );

        buttonToggleBrandsList.innerHTML = "Скрыть";

    }else {
        divBrandsList.className =
            `${currentBrandsListClass} brands-list__container--height--min`;

        buttonToggleBrandsList.innerHTML = "Показать все";
    }
}