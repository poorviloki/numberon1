var urlparams = new URLSearchParams(window.location.search);
var score = urlparams.get("score");
var scoreBoard = document.getElementById("score-board");
var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;

playAgainButton.onclick = () => {
    location.href = "./game.html";
};
