const findNextSeq =()=>{
    let newColor = buttonColours[Math.floor(Math.random() * 4)];
    setTimeout(() => {
    findSound(newColor);
    flashButton(newColor);
    }, 500 * i);
    
    return newColor;
}
const flashButton = (color) => {
    $("#" + color).addClass("flash");
    setTimeout(() => {
        $("#" + color).removeClass("flash");
    }, 200);
}

let userSeq = [];
let actualSeq = [];

const userClick = (color)=>{
        userSeq.push(color); 
        flashButton(color);
        findSound(color); 
}

const checkUserSequence = () =>{
    let currentIndex = userSeq.length - 1;
    if(actualSeq[currentIndex] != userSeq[currentIndex]){
        wrong.play();
        alert("game over");
        return false;
    }
    if (userSeq.length === gameSeq.length) {
        setTimeout(nextSequence, 1000);
        return true;
    }
}

const gamePlay = ()=>{
    actualSeq.push(findNextSeq());
    // actualSeq.forEach((color ,index) =>{
    //     setTimeout(() => {
    //         userClick()
    //     }, 500 * index);
    // })
    
}


$(document).keydown(function(event) {
    $(".btn").click(function () {
        let userChosenColor = $(this).attr("id");
        userClick(userChosenColor);
    });

    if (event.key === 'a' || event.key === 'A') {
        gamePlay();
    }
});