// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese=document.querySelector('#cheese');
  if(state.Cheese)
    cheese.style.display="inherit"
  else
    cheese.style.display ="none"
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes=document.querySelector('#tomato');
  if(state.Tomatoes)
    tomatoes.style.display="inherit"
  else
    tomatoes.style.display ="none"
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions=document.querySelector('#onion');
  if(state.Onions)
    onions.style.display="inherit"
  else
    onions.style.display ="none"
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce=document.querySelector('#lettuce');
  if(state.Lettuce)
    lettuce.style.display="inherit"
  else
    lettuce.style.display ="none"
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function(){
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function(){
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};



// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function(){
  state.Onions = !state.Onions;
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function(){
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  if(state.Patty == true){
    let activepatty=document.getElementById("Patty");
    activepatty.classList.add("active");
  }
  else{
    let activepatty=document.getElementById("Patty");
    activepatty.classList.remove("active");
  }
  if(state.Cheese == true){
    let activecheese=document.getElementById("Cheese");
    activecheese.classList.add("active");
  }
  else{
    let activecheese=document.getElementById("Cheese");
    activecheese.classList.remove("active");
  }
  if(state.Tomatoes == true){
    let activetomatoes=document.getElementById("Tomatoes");
    activetomatoes.classList.add("active");
  }
  else{
    let activetomatoes=document.getElementById("Tomatoes");
    activetomatoes.classList.remove("active");
  }
  if(state.Onions == true){
    let activeonions=document.getElementById("Onions");
    activeonions.classList.add("active");
  }
  else{
    let activeonions=document.getElementById("Onions");
    activeonions.classList.remove("active");
  }
  if(state.Lettuce == true){
    let activelettuce=document.getElementById("Lettuce");
    activelettuce.classList.add("active");
  }
  else{
    let activelettuce=document.getElementById("Lettuce");
    activelettuce.classList.remove("active");
  }
}




//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard(){
  
}




//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice(){
  var sum=10
  if(state.Patty == true){
    sum=sum+ingredients['Patty']
  }
  if(state.Cheese == true){
    sum=sum+ingredients['Cheese']
  }
  if(state.Tomatoes == true){
    sum=sum+ingredients['Tomatoes']
  }
  if(state.Onions == true){
    sum=sum+ingredients['Onions']
  }
  if(state.Lettuce == true){
    sum=sum+ingredients['Lettuce']
  }
  let element=document.getElementById("price-details");
  console.log(sum)
  element.innerHTML="INR "+sum;
}

