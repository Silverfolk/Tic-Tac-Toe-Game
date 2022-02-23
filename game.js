
function startNewGame() {
  if (player[0].name === "" || player[1].name === "") {
    alert("Please set Custom Player names for both Players");
    return;
  }

  resetGameStatus();


  gameAreaElement.style.display = "block";
  activePlayerNameElement.textContent = player[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
 
  } else if (activePlayer === 1) {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = player[activePlayer].name;
}

function selectGameField(event) {
    if( gameIsOver===true){
        return;
    }
  const selectedField = event.target;
  const selectedColumn=selectedField.dataset.col-1;
  const selectedRow=selectedField.dataset.row-1;

  if(gameData[selectedRow][selectedColumn]>0){  
      alert("PLease select an empty field !");
      return;
  }


  selectedField.textContent = player[activePlayer].symbol; 
 
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn]=activePlayer+1;
  console.log(gameData);
  let WinnerId=checkForGameOver();
  
  if(WinnerId !==0){
      endGame(WinnerId);
  }
  CountForTie++;

  switchPlayer();
}



function checkForGameOver(){
    // for coloumn Completion
    for(let i=0;i<3;i++){
        if(gameData[0][i]>0 && gameData[0][i]===gameData[1][i] && gameData[1][i]===gameData[2][i]){
            return gameData[0][i];
        }
    }
   
    // for row Completion
    for(let i=0;i<3;i++){
        if(gameData[i][0]>0 && gameData[i][0]===gameData[i][1] && gameData[i][1]===gameData[i][2]){
            return gameData[i][0];
        }
    }

    // for left to right diagonal
    if(gameData[0][0] >0 && gameData[0][0]===gameData[1][1] && gameData[1][1]===gameData[2][2]){
        return gameData[0][0];
    }

    // for right to left diagonal
    if(gameData[2][0] >0 && gameData[2][0]===gameData[1][1] && gameData[1][1]===gameData[0][2]){
        return gameData[2][0];
    }

    // for tie return -1
    if(CountForTie===9){
        return -1;
    }

    
     return 0;
    
}


// function for game ending
function endGame(winnerId){
    gameOverElement.style.display="block";
    gameIsOver=true;
    if(winnerId>0){
        const winnerName=player[winnerId-1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent=winnerName;//"firstElementChild" do baar isslyye likha hai taaki hum acess kar sake "h2" of "<article id="game-over">"
    }else{
        gameOverElement.firstElementChild.textContent="It's a Draw!";
    }
}


// Now we are going to make a function to reset the game

// "resetGameStatus()" ye function tabhi call hoga jab hum "new game start " karenge
function resetGameStatus(){
    activePlayer=0;
    CountForTie=1;//as game is resetting so count will be 1
    gameIsOver=false;
    gameOverElement.firstElementChild.innerHTML=
    'You Won! <span id="winner-name"> Winner </span>!';
    gameOverElement.style.display="none";

    // NOw we are going to make all fields of array be 0
    let gameBoardIndex=0;//basically hum "firstElement.children" jo array bana ke dega "list" ka ussko classList mai "disable class" ko remove karne ke liye use kar rhe hai
    for(let i =0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
            const gameBoardItemElement=gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent="";
            gameBoardItemElement.classList.remove("disabled");
            gameBoardIndex++;
        }
    }
}
