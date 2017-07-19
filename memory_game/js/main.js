var cards = ["Queen" , "Queen" , "King" , "King"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log ("User flipped " + cardsInPlay[0]);
var cardTwo = cards[1];
cardsInPlay.push (cardTwo);
console.log ("User flipped " + cardsInPlay[1]);
if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert ("Congratulations! You found a match!")
  }
  else {
    alert ("Sorry. Please try again! You can do it!")
  }
}
