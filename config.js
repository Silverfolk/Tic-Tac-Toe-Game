
function openPlayerConfig(event) {
  
  modalasideSectionElement.style.display = "block";
  
  backdropElement.style.display = "block";

  const SelectedPlayerId = event.target.dataset.playerid; 
  
  editedPlayer = +SelectedPlayerId; 

}

function closePlayerConfig() {
 
  modalasideSectionElement.style.display = "none";
  backdropElement.style.display = "none";
  spaceerrorElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error"); 
}

function savePlayerConfig(event) {
  
  event.preventDefault(); 

  const formData = new FormData(event.target); 
  
  let enteredPlayername = formData.get("username").trim();
  console.log(enteredPlayername);

  enteredPlayername = enteredPlayername.trim(); 
  if (enteredPlayername === "") {
  
    spaceerrorElement.style.display = "block";
    event.target.firstElementChild.classList.add("error"); 
    return;
  
  }

  
  let UpdatePlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-info"
  ); 
  UpdatePlayerDataElement.children[1].textContent = enteredPlayername; 


  if (editedPlayer === 1) {
    player[0].name = enteredPlayername;
  } else {
    player[1].name = enteredPlayername;
  }
  // Now after updating name we will close it '
  closePlayerConfig();
}
