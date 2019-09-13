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

// var cards = ["queen", "queen","king", "king"];

var cards = [

    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamond",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

var cardsInPlay = [];

// function checkForMatch(cardId){
//     setAttribute( 'src' , cards[cardId].cardImage);
//     if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
//         console.log("You found a match!");
//       } else{
//         console.log("Sorry, try again.");
//       }

// }

function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId]);


    //cardsInPlay.push(cards[cardId]);


    // if(cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){

    //     alert("You found a match!");
    // }else{ 
    //     alert("Sorry, try again!");
    // };
    //console.log("User filpped " + cards[cardId]);


    console.log("User filpped " + cards[cardId].rank);
    console.log("User filpped " + cards[cardId].suit);
    console.log("User filpped " + cards[cardId].cardImage);
    //checkForMatch();


    this.setAttribute( 'src' , cards[cardId].cardImage);
    if (cardsInPlay.length === 2 && cardsInPlay[0].rank === cardsInPlay[1].rank) {
        alert("You found a match!");
      } else if(cardsInPlay.length > 1){
        alert("Sorry, try again.");
      }


}

// cardsInPlay.push(cards[cardId]);
// flipCard(0);
// flipCard(2);


// var cardOne = cards[0]; 
// var cardTwo = cards[2];
/*
var cardThree = cards[2];
var cardFour = cards[3];
*/

// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardsInPlay);

function createBoard()
{
    var k = cards.length;
    for(var i = 0 ; i < k ; i++)
    {
var cardElement= document.createElement('img');
cardElement.setAttribute('src','images/back.png');
 
cardElement.setAttribute("data-id" , i);
cardElement.addEventListener("click" , flipCard);

document.getElementById('game-board').appendChild(cardElement);


// // cardElement.setAttribute("")
// // cardElement.addEventListener('click' , flipCard);
// // cardElement.geteleElementById("game-board").appendChild(cardElement);

    }

} 

createBoard();