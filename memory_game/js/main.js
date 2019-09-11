//console.log("Up and running!");

/*var cardOne = "queen";
var cardTwo = cardOne;
var cardThree = "king";
var cardFour = cardThree;


console.log("user Flipped " + cardOne);
console.log("user Flipped " + cardTwo);
console.log("user Flipped " + cardThree);
console.log("user Flipped " + cardFour);
*/

var cards = ["queen", "queen","king", "king"];
var cardsInPlay = [];
var cardOne = cards[0]; 
var cardTwo = cards[2];

/*
var cardThree = cards[2];
var cardFour = cards[3];
*/

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay);

if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){

    alert("You found a match!");
}else{ 
    alert("Sorry, try again!");
};

