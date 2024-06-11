const blueS = new Audio('sounds/blue.mp3');
const greenS = new Audio('sounds/green.mp3');
const redS = new Audio('sounds/red.mp3');
const yellowS = new Audio('sounds/yellow.mp3');
const wrong = new Audio('sounds/wrong.mp3');
var started = false;
var level = 0;

const findSound = (str) => {
    switch (str) {
        case "blue":
            blueS.play();
            break;

        case "green":
            greenS.play();
            break;

        case "red":
            redS.play();
            break;

        case "yellow":
            yellowS.play();
            break;

        default:
            wrong.play();
    }
}

const flashButton = (color) => {
    $("#" + color).addClass("flash");
    setTimeout(() => {
        $("#" + color).removeClass("flash");
    }, 200);
}

const buttonColours = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];

const findNextSeq = () => {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let newColor = buttonColours[Math.floor(Math.random() * 4)];
    gamePattern.push(newColor);
    findSound(newColor);
    flashButton(newColor);
}

$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    findSound(userChosenColour);
    flashButton(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

const checkAnswer = (currentLevel) => {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                findNextSeq();
            }, 1000);
        }
    } else {
        wrong.play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        findNextSeq();
        started = true;
    }
});
