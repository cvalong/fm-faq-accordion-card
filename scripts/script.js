const buttonArray = document.querySelectorAll('.accordion-button');
console.log(buttonArray);
const contentArray = document.querySelectorAll('.accordion-content');
console.log(contentArray);

function openAccordion() {
    const currentButton = this;
    console.log(currentButton);

    let currentButtonIndex;
    for (let i = 0; i < buttonArray.length; i++) {
        if(buttonArray.item(i) == currentButton) {
            currentButtonIndex = i;
        }
    }
    console.log(currentButtonIndex);

    displaySwitcher(currentButtonIndex);
    displayChecker(currentButtonIndex);

}

function displaySwitcher(index) {
    console.log(contentArray.item(index));
    const currentContent = contentArray.item(index);
    contentClassString = currentContent.getAttribute('class');
    const class1 = 'invisible';
    const class2 = 'visible';
    
    console.log(contentClassString);
    
    let subStrIndex = contentClassString.indexOf(class1);
    if ( subStrIndex !== -1) {
        currentContent.setAttribute('class', contentClassString.substring(0, subStrIndex) + class2);
    } else {
        subStrIndex = contentClassString.indexOf(class2);
        currentContent.setAttribute('class', contentClassString.substring(0, subStrIndex) + class1);
    }
    console.log(currentContent.getAttribute('class'));
}

function displayChecker(index) {

}

buttonArray.forEach(el => el.addEventListener('click', openAccordion));