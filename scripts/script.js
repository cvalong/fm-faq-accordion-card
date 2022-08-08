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
    const contentClassString = currentContent.getAttribute('class');
    const class1 = 'invisible';
    const class2 = 'visible';
    
    console.log(contentClassString);
    
    let subStrIndex = contentClassString.indexOf(class1);
    if ( subStrIndex !== -1) {
        currentContent.setAttribute('class', removeClass(contentClassString, class1) + class2);
    } else {
        subStrIndex = contentClassString.indexOf(class2);
        currentContent.setAttribute('class', removeClass(contentClassString, class2) + class1);
    }
    console.log(currentContent.getAttribute('class'));
}

function displayChecker(index) {
    const currentContent = contentArray.item(index);
    const classString = currentContent.getAttribute('class');
    const class1 = 'invisible';
    const class2 = 'visible';

    contentArray.forEach(el => {
        if (el !== currentContent) {
            if (!(hasClass(classString, class1))) {
                el.setAttribute('class', removeClass(classString, class2) + class1);
            }
        }
    });
}

function hasClass (classString, c) {
    searchIndex = classString.indexOf(c);
    if ( searchIndex !== -1) {
        return true;
    } else {
        return false;
    }
}

function removeClass (classString, c) {
    return classString.substring(0, classString.indexOf(c));
}

buttonArray.forEach(el => el.addEventListener('click', openAccordion));