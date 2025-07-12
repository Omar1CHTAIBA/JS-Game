
var PC;
var PS = 0;
var OC;
var OS = 0;
var choices = ["rock", "paper", "scissors"];

// Typing animation variables
let welcomeText = "Welcome to\nRock,\nPaper,\nScissors,\ngame!\n   -Omar Chtaiba";
let currentIndex = 0;
let isDeleting = false;
let typingSpeed = 150;
let deletingSpeed = 100;
let pauseTime = 2000;

window.onload = function() {
    // Start the typing animation
    typeWriter();
    
    for (let index = 0; index < choices.length; index++) {
        const choice = document.createElement("img");
        choice.id = choices[index];
        choice.src = choices[index] + ".png";
        choice.addEventListener("click", selectchoice); 
        document.getElementById("choices").append(choice);
    }
}

function typeWriter() {
    const welcomeElement = document.getElementById("welcome-text");
    
    if (isDeleting) {
        // Delete characters
        welcomeElement.textContent = welcomeText.substring(0, currentIndex - 1) + '|';
        currentIndex--;
    } else {
        // Type characters
        welcomeElement.textContent = welcomeText.substring(0, currentIndex + 1) + '|';
        currentIndex++;
    }
    
    // Determine typing speed
    let speed = isDeleting ? deletingSpeed : typingSpeed;
    
    // Handle direction changes
    if (!isDeleting && currentIndex === welcomeText.length) {
        // Finished typing, pause then start deleting
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, pauseTime);
        return;
    } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, pause then start typing again
        setTimeout(() => {
            isDeleting = false;
            typeWriter();
        }, pauseTime);
        return;
    }
    
    // Continue the animation
    setTimeout(typeWriter, speed);
}

function selectchoice(){
    PC = this.id; // its add a property to the img object and so he nows the this because its already a property in the object
    document.getElementById("PC").src = PC + ".png";
    opponent = choices[Math.floor(Math.random() * 3)]
    document.getElementById("OC").src = opponent + ".png"
    // checking
    if (PC == opponent) {
        PS++;
        OS++;
    }
    else {
        if (PC == "rock") {
            if (opponent == "scissors") {
                PS++;
            }
            else{
                OS++;
            }
        }
        else if (PC == "scissors") {
            if (opponent == "paper") {
                PS++;
            }
            else{
                OS++;
            }
        }
        else if (PC == "paper") {
            if (opponent == "rock") {
                PS++;
            }
            else{
                OS++;
            }
        }
    }
    document.getElementById("PS").innerText = PS;
    document.getElementById("OS").innerText = OS;
}