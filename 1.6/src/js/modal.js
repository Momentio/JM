

let modalIds = ["request-call", "request-mail", "request-video-call"];

modalIds.forEach(id => {
    document.querySelectorAll(`.${id}-icon`).forEach(element => {
        element.addEventListener("click", function() {
            toggleModalHandler(true, id);
        }, false);
    });

    document.querySelectorAll(`#${id} .icon--close, #${id} > .modal__container`).forEach(element => {
        element.addEventListener("click", function() {
            toggleModalHandler(false, id);
        }, false);
    });
});

function toggleModalHandler(
    state,
    modalId
) {
    if(!modalId) return false;
    
    let modalDiv = document.getElementById(modalId);
    
    if(modalDiv){
        let currentClass = modalDiv.className;
        let modificator = `modal--show`;
    
        if(currentClass.includes(modificator)){
            if(state === undefined || state === false){
                modalDiv.className =
                    currentClass.replace(` ${modificator}`, "");
                    document.body.style.overflow = "visible";
            }
    
        }else {
            if(state === undefined || state === true){
                modalDiv.className = `${currentClass} ${modificator}`;
                document.body.style.overflow = "hidden";
            }
        }
    }
}