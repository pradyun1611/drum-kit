var drumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonPressed =  this.innerHTML;
        makeSound(buttonPressed);
        pressButton(buttonPressed);
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    pressButton(event.key);
});

function makeSound(key) {
    switch (key) {
        case("a"): 
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case("s"):
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case("d"):
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case("f"):
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        case("j"):
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case("k"):
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case("l"):
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
    }
}

function pressButton(key) {
    var currentButton = document.querySelector("." + key);
    currentButton.classList.add("pressed");
    setTimeout(function() {
        currentButton.classList.remove("pressed");
    },100);
}