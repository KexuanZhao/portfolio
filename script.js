let typingEffectElement = document.getElementById("typing-effect");
let textsToType = ["Sophie Zhao", "a Web Developer", "a Backend Engineer"];
let curTextIndex = 0;
let curCharIndex = 0;
let isDeleting = false;

function typeText() {
  // Get the current text & the text to display
  let currentText = textsToType[curTextIndex]; 
  let visibleText = currentText.substring(0, curCharIndex);

  typingEffectElement.innerHTML = visibleText;

  let typingSpeed = isDeleting ? 50 : 150; // Set up deleting and typing speed, deleting > typing

  if (!isDeleting && curCharIndex < currentText.length) {
    curCharIndex++; // Type forward
  } else if (isDeleting && curCharIndex > 0) {
    curCharIndex--; // Delete backward
  } else if (!isDeleting && curCharIndex === currentText.length) {
    // Pause before deleting
    if (curTextIndex < textsToType.length - 1) {
      isDeleting = true;
      typingSpeed = 1000;
    } else {
      // Stop the process after the last text
      return;
    }
  } else if (isDeleting && curCharIndex === 0) {
    // Move onto the next text
    isDeleting = false;
    curTextIndex++;
  }

  setTimeout(typeText, typingSpeed); // Schedule the next typing step
}

document.addEventListener("DOMContentLoaded", typeText);