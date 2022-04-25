
// Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


// Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Title
var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    title.innerHTML = "🚩Player 1 Wins!!!";
}
else if(randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 Wins!!!🚩";
}
 else {
        title.innerHTML = "Draw!!!🎌";
    }
