// game variables
let score = 0;
let interval = 1000;
let bitcoin = document.getElementById("bitcoin");
let gameArea = document.getElementById("gameArea")
let intervalID;

// moving Bitcoin to random position
function moveBitcoin(){

    // generates a random number between 0 and maximum possible x/y of Bitcoin
    let x = Math.floor(Math.random() * (gameArea.offsetWidth - bitcoin.offsetWidth));
    let y = Math.floor(Math.random() * (gameArea.offsetHeight - bitcoin.offsetHeight));

    // Bitcoin hops randomly within the game area
    bitcoin.style.top = y + "px";
    bitcoin.style.left = x + "px";
}

// starting game with random position on the area
function startGame(){

    // Bitcoin hops randomly each second
    intervalID = setInterval(moveBitcoin, interval);
    document.getElementById("interval").textContent = interval;
}

bitcoin.addEventListener("click", function(){

    // increment score
    score++;
    document.getElementById("score").textContent = score;

    // decrement interval
    interval = interval - 25;
    document.getElementById("interval").textContent = interval;

    // clear previous interval and start new one
    clearInterval(intervalID);
    moveBitcoin();
    intervalID = setInterval(moveBitcoin, interval);
});

// resetting score
document.getElementById("resetScore").addEventListener("click", function(){
    score = 0;
    document.getElementById("score").textContent = score;
});

// resetting speed
document.getElementById("resetSpeed").addEventListener("click", function(){
    clearInterval(intervalID);
    interval = 1000;
    document.getElementById("interval").textContent = interval;

    intervalID = setInterval(moveBitcoin, interval);
});

startGame();
