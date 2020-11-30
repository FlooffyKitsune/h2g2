//variable declarations
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
//textArray is a modular container for strings that will be typed by the animation
//so the script will handle any new strings added
const textArray = ["Hitchhiker's Guide to the Galaxy", "DON'T PANIC"];

//timing declarations
const typingDelay= 150;
const erasingDelay = 100;
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex = 0;

//when typing or erasing functions are being executed the "cursor" is
//set to stay solid.  When the animations are idling the "cursor" will
//blink similar to how typing functions for the user on a command prompt

//function handles the typing part of the animation
//handles typing out any text contained in the index
//toggles blinking animation on the "cursor"
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

//function handles the erasing part of the animation
//handles erasing of any text contained in the index
//toggles blinking animation on the "cursor"
function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing")
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

//on document load the script runs
//this could be changed to run after all other parts load
document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});