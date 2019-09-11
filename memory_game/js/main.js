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

function checkForMatch(){

    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }

}

function flipCard(cardId){

    cardsInPlay.push(cards[cardId]);
    // if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){

    //     alert("You found a match!");
    // }else{ 
    //     alert("Sorry, try again!");
    // };
    console.log("User filpped " + cards[cardId]);
    checkForMatch();
}

// cardsInPlay.push(cards[cardId]);
flipCard(0);



// var cardOne = cards[0]; 
// var cardTwo = cards[2];
/*
var cardThree = cards[2];
var cardFour = cards[3];
*/

// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardsInPlay);