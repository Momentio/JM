
let fackedSwiper;

initSwiper();

function initSwiper() {
    try{
        if(Number(document.body.offsetWidth) < 768){
            if(!fackedSwiper){
                fackedSwiper = new Swiper('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
    
            }else{
                fackedSwiper.attachEvents();
            }
    
        }else{
            if(fackedSwiper){
                fackedSwiper.detachEvents();
                fackedSwiper.destroy();
            }
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