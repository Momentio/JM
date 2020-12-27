
let categoryNames = ["brands", "technics", "price-list"];

categoryNames.forEach(categoryName => {
    let buttonName = "toggle-all";

    let category = document.getElementById(`${categoryName}__${buttonName}`);

    if(category){
        category.addEventListener(
            "click", () => {
                toggleListHandler(categoryName, buttonName);
            }, true
        );
    }
});

function toggleListHandler(
    categoryName,
    buttonName = "toggle-all",
    modificatorName = "height",
    modificatorValue = "min",
) {
    if(!categoryName
        || !buttonName
        || !modificatorName
        || !modificatorValue) return false;
    
    let divList = document.getElementById(`${categoryName}__list`);
    let buttonToggleListId = document.getElementById(`${categoryName}__${buttonName}`);
    
    if(divList && buttonToggleListId){
        let currentListClass = divList.className;
        let modificator = `${categoryName}__list--${modificatorName}--${modificatorValue}`;
    
        if(currentListClass.includes(modificator)){
            divList.className =
                currentListClass.replace(` ${modificator}`, "");
    
            buttonToggleListId.innerHTML = "Скрыть";
    
        }else {
            divList.className = `${currentListClass} ${modificator}`;
    
            buttonToggleListId.innerHTML = "Показать все";
        }
    }
}