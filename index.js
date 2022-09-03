var buttonLength = document.querySelectorAll(".drum").length;


// Detect button key 

for (let i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {       
       var buttonElement = this.innerHTML;
       makeSound(buttonElement);  
       buttonPressed(buttonElement);
    });}



// detect keybord key

    document.addEventListener("keydown", function (event) {
        makeSound(event.key);
        buttonPressed(event.key)
    });

function makeSound(key) {
    switch (key) {
        case "w":
                var tom1 = new Audio("sounds/tom-1.mp3"); 
                tom1.play();
                break;
        case "a":
                var tom2 = new Audio("sounds/tom-2.mp3"); 
                tom2.play();
                break; 
        case "s":
                var tom3 = new Audio("sounds/tom-3.mp3"); 
                tom3.play();
                break; 
        case "d":
                var tom4 = new Audio("sounds/tom-4.mp3"); 
                tom4.play();
                break;
        case "j":
                var audio = new Audio("sounds/crash.mp3"); 
                audio.play();
                break; 
        case "k":
                var audio = new Audio("sounds/kick-bass.mp3"); 
                audio.play();
                break;     
        case "l":
                var audio = new Audio("sounds/snare.mp3"); 
                audio.play();
                break;       
        default:
                console.log(buttonElement);
                break;
    }
}

function buttonPressed(buttonKey) {
    var activeButton = document.querySelector("."+buttonKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}