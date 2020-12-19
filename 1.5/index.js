
let fackedSwiper;

initSwiper();

function initSwiper() {
    try{
        if(fackedSwiper){
            fackedSwiper.destroy();
        }

        if(Number(document.body.offsetWidth) < 768){
            fackedSwiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }
    
    }catch(errorFromFackedSwiper){
        return true;
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