
var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomDiceImage = "dice"+ randomNumber1+".png";
var randomImageSource= "images/"+ randomDiceImage;


var image1 =document.querySelectorAll("img")[0];
//document.getElementById(#dice1).src= imgArray[randomNumber1].src;
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage1 = "dice"+ randomNumber2+".png";
var randomImageSource1= "images/"+ randomDiceImage1;

var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource1);
var winText = document.querySelector("h1");
if(randomNumber1>randomNumber2){
  winText.innerHTML = "Player 1 wins";
}else if(randomNumber2>randomNumber1){
winText.innerHTML = "Player 2 wins";
}else{
winText.innerHTML = "Draw";
}
