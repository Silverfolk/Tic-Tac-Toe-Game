// ye file pehle banaenge aur isske ander bunch of things honge like html element pe jaake uske id ko fetch karke unnhe variables ya constant mai bana denge
// first we will fetch overlay "jo aside section the uska by id"
let modalasideSectionElement = document.getElementById("config-overlay");
let backdropElement = document.getElementById("backdrop");

// Now we edit the form -->yaha hum query selector ka use karenge although hum id deke bhi getElementById bhi use kar sakte the
// queryselector basically yaha jo sabse pehla "form" ka tag hoga usse select karega aur hum usse fetch kar rahe hai
let formElement = document.querySelector("form");
let editedPlayer = 0; //basically player 2 hai apne pass aur hum chah rhe hai ki jo bhi player ho uski value "1" ya "2" hogi as humne "data-identifier " ka use karke specified kar diya tha ki value ya toh 1 ya 2 hogi and remember jo bhi value milegi vo string hogi so usse hume interger mai change karna hoga
let activePlayer = 0; //this variable is created so that we know who is the active player "0"->player1 and "1"->player2
// innko upar issliye rakha hai kyuki jab function call hoga usse pehle ye elements present hone chahiye program mai

let CountForTie=1;
// now for game-field we will create an array to store the information
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]; //for player 1 we going to put value 1 here and for player 2 value we will be putting will be 2

  let gameIsOver=false;

// Now we wanted to save player Info
const player = [
  {
    name: "",
    symbol: "X",
  },
  { name: "", symbol: "O" },
];



// now we fetch the "start new game btn" and also add a event listner on it
const StartNewGameBtnElement = document.getElementById("start-game-btn");
StartNewGameBtnElement.addEventListener("click", startNewGame);
const gameAreaElement = document.getElementById("game-area");
let activePlayerNameElement = document.getElementById("active-player-name");

// first we will fetch player 1 and 2 name button
let editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
let editPlayer2BtnElement = document.getElementById("edit-player-2-btn");

// now we are going to fetch the Box fields for the game
const gameFieldElements = document.querySelectorAll("#game-board li"); //here we are going to select all the lists
const gameBoardElement = document.getElementById("game-board");

// now we will edit game-over element 
const gameOverElement=document.getElementById("game-over");

// now abb jab hum "edit your name pe click karenge toh hume vo "aside"form dikhaenge jo hum display:none karke hide kara tha
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
// basically ye kya karega ki jaise hi hum log "edit" wale pe click karenge tab kyuki hum logo ne pehle se hi "edit-player-1-btn" ka data fetch  ka rrakha hai aur uspe eventlistner hai so haise hi click karenge toh openPLayerConfig() function fire hoga
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

// now abb hum ye bhi chahte hai ki "backdrop" section pe click karne pe ya phir cancel pe click karne pe modal/aside section band ho jaye so we will add event listner for it
// first we first cancel html
let CancelBtnElement = document.getElementById("cancel-btn");
CancelBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

// basically hum log cha yaha ye rhe hai ki jaise hi submit button pe click hoga humara "text" jo bhi hoga vo form mai submit ho jaega
formElement.addEventListener("submit", savePlayerConfig);
// "submit" is build-in event in the browser available in js in which we wnated to add listner
let spaceerrorElement = document.getElementById("space-error");

// now we are here going to use "for-each-loop" to check which of the field is choosen
for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}

// gameBoardElement.addEventListener("click",selectGameField);
