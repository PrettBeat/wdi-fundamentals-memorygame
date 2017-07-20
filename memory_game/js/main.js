var cards = [
  {
    rank: "Queen",
    suit: "Hearts",
    image: "images/queen-of-hearts.png"
  },
  {
    rank: "Queen",
    suit: "diamonds",
    image: "images/queen-of-diamonds.png"
  },
  {
    rank: "King",
    suit: "Hearts",
    image: "images/king-of-hearts.png"
  },
  {
    rank: "King",
    suit: "Diamonds",
    image: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert ("Congratulations! You found a match!");
    }
    else {
      alert ("Sorry. Please try again! You can do it!");
    }
  }
}
var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push (cards[cardId].rank);
  checkForMatch();
}

flipCard(0);
flipCard(2);

console.log (cards[0].image);
console.log (cards[0].suit);
console.log (cards[2].image);
console.log (cards[2].suit);
