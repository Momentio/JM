
document.getElementById("main-about__toggle-all").addEventListener(
    "click", () => {
        toggleText("main-about", "toggle-all");
    }, true
);

function toggleText(
    categoryName,
    buttonName = "toggle-all",
    modificatorName = "height",
    modificatorValue = "min",
) {
    if(!categoryName
        || !buttonName
        || !modificatorName
        || !modificatorValue) return false;
    
    let block = document.getElementById(`${categoryName}__description`);
    let button = document.getElementById(`${categoryName}__${buttonName}`);
    
    if(block && button){
        let currentBlockClass = block.className;
        let modificator = `${categoryName}__description--${modificatorName}--${modificatorValue}`;
    
        if(currentBlockClass.includes(modificator)){
            block.className =
                currentBlockClass.replace(` ${modificator}`, "");
    
            button.innerHTML = "Свернуть";
    
        }else {
            block.className = `${currentBlockClass} ${modificator}`;
    
            button.innerHTML = "Читать далее";
        }
    }
}