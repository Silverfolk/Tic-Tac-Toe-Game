
let modalasideSectionElement = document.getElementById("config-overlay");
let backdropElement = document.getElementById("backdrop");

let formElement = document.querySelector("form");
let editedPlayer = 0;
let activePlayer = 0; 


let CountForTie=1;

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]; 

  let gameIsOver=false;


const player = [
  {
    name: "",
    symbol: "X",
  },
  { name: "", symbol: "O" },
];


const StartNewGameBtnElement = document.getElementById("start-game-btn");
StartNewGameBtnElement.addEventListener("click", startNewGame);
const gameAreaElement = document.getElementById("game-area");
let activePlayerNameElement = document.getElementById("active-player-name");


let editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
let editPlayer2BtnElement = document.getElementById("edit-player-2-btn");


const gameFieldElements = document.querySelectorAll("#game-board li"); //here we are going to select all the lists
const gameBoardElement = document.getElementById("game-board");

const gameOverElement=document.getElementById("game-over");


editPlayer1BtnElement.addEventListener("click", openPlayerConfig);


let CancelBtnElement = document.getElementById("cancel-btn");
CancelBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);


formElement.addEventListener("submit", savePlayerConfig);
// "submit" is build-in event in the browser available in js in which we wnated to add listner
let spaceerrorElement = document.getElementById("space-error");

// now we are here going to use "for-each-loop" to check which of the field is choosen
for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}

