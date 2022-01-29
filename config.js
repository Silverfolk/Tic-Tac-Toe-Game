// issme hum jo variables aur constants humne app js banai hai uska use karke banaenge
// logic basically isske ander hi hoga aur jo function honge vo issme likhe hue honge
function openPlayerConfig(event) {
  // abb isska hume css badalna hai,uska hum "style" method se change karenge
  modalasideSectionElement.style.display = "block";
  // similar for "backdrop section"
  backdropElement.style.display = "block";

  // hum log ko ye bata hai ki jaise hi edit button pe click hoga openplayerconfig /aside section khulega jaha pe hum log naam bharenge
  const SelectedPlayerId = event.target.dataset.playerid; //atarget se ye bata lagega ki event kiski vajah se ho rha hai
  //    Note:-"dataset " ek object hai jiske ander jitne bhi "data-" banae hai humne yaha "data-playerid="1""  the unko acess kar payenge aur unke corresponding unki key hogi
  // Now "dataset" can be multiple as we can make mutiple "data-identifier" so hume specify karana padega with the help of "id which was given"
  // const selectedPlayerId=event.target.dataset.playerid basically isska use karke hum pata laga sakte hai ki konsa player hum edit kar rhe hai
  editedPlayer = +SelectedPlayerId; //+ is added as string ko number mai convert karega..e.g-+'1'=>1
  // "editedPLayer" ye batayega ki konsa player hai "1" ya "2"
}

function closePlayerConfig() {
  // here we are doing the opposite of openPlayerconfig() function
  modalasideSectionElement.style.display = "none";
  backdropElement.style.display = "none";
  spaceerrorElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error"); //for removing error class
}

// yaha hum form submission ka form banaenge
function savePlayerConfig(event) {
  // ye function tabhi submit hoga agar form submit hoga
  // hum yaha pe broser ka default behaviour ko badalna chahte hai
  // basically hota kya hai jaise hi hum submit button dabate hai brwoser try karta hai ki ek "https" request bheje server ko yaha pe jo server hai jo developmental server aur browser waha data send karna chahta hai

  // browser ka default bahaviour change karne ke liye hum "event object " ka use karenge
  // "event object" decribe karta hai event ko automatically
  // iss "event" ke pass ek "preventDefault method" hota hai hai jo default behaviour event ka hota hai usse disable karta hai
  event.preventDefault(); //ye basically browser ka jo default bahaviour hai jo https request bhejna uska prevent karega
  // abb page reload nhi hoga submit karne pe aur hum kaam khud se karenge

  //  now abb hum form submisssion ko dekhenge
  // formData ke ander hum object ko store karenge not by this"{}" object by using "new FormData"
  const formData = new FormData(event.target); //event target hume form pe leke jayega
  // formData ek built-in function hai-->FormData basically ek blueprint function hai jo "Form" leta hai aur vo basically khud se hi values ko extract karega unn values ko jo input mai save honngi form ke
  //  "event" object ke pass ek target property hoti hai jo point karta hai "html element " ko that is responsible for that event aur yaha pe form responsible hai

  // basically yaha pe hoga kya ki JavaScript jo form humne pass ki hai usko analyse karegi aur automatically uske ander input ko dekhegi aur ussi input ko dekhegi jiski name field hogi
  // toh formData ke pass input ke elements hai aur isske ander ek method hai jisse hum "name jo identifier hai jisme naam aayega " usko fetch kar sakte hai by ".get Mathod"
  let enteredPlayername = formData.get("username").trim(); //Note:-isske ander hum string pass karte with the identifier of the input element of which we wanted to get the value
  console.log(enteredPlayername);

  enteredPlayername = enteredPlayername.trim(); //trim basically ye karega "  Harsh Kumar   "-->change it to-->"Harsh Kumar" basically ye aage jo extra space tha aurpiche jo extra tha usko hataega
  if (enteredPlayername === "") {
    //i.e if it an empty string then we will write pls enter a valid input
    spaceerrorElement.style.display = "block";
    event.target.firstElementChild.classList.add("error"); //basically humne yaha targetse "form" tak gye firstElementChild se "form ke ander div pe gye" aur classAdd se uska ander "new Class add ki"
    // abb hum iss extra class ka use karke kuch styling daal sakte hai in "configuration Css"
    return;
    //  as code nhi aayega toh  hum aage ka kaam nhi karenge
  }

  // now for closing all this we will just go to closePlayerConfig function and do some changes there
  let UpdatePlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-info"
  ); //as "1" ya"2" kuch bhi value ho sakti hai so string concatinate karne ke liye ye use kara hai
  UpdatePlayerDataElement.children[1].textContent = enteredPlayername; //children property se kisi div ke jitne children hai sab array mai aa jayenge as "1" children mai h3 tag tha jisme naam updata karna tha so issliye ye kiya

  //    Now we wanted to save who is first and second player as we wanted to apply js after in it
  if (editedPlayer === 1) {
    player[0].name = enteredPlayername;
  } else {
    player[1].name = enteredPlayername;
  }
  // Now after updating name we will close it '
  closePlayerConfig();
}
