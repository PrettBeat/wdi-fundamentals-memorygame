window.onload = function() {

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
    if (cardsInPlay[0].rank === cardsInPlay[1].rank){
      alert ("Congratulations! You found a match! Press Ok to play again!");
    }
    else {
      alert ("Sorry. Please try again! You can do it!");
    }
    cardsInPlay = []
    document.getElementById('game-board').innerHTML = ""
    createBoard();
  }
}

var shuffle = function (array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

var flipCard = function () {
  var cardId = this.getAttribute('data-id')
  console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
  this.setAttribute("src", cards[cardId].image);
  this.removeEventListener ('click' , flipCard);
  cardsInPlay.push (cards[cardId]);

  setTimeout(checkForMatch , 250)
}
var createBoard = function() {
  shuffle(cards)
  for (var i=0 ; i < cards.length ; i += 1){
  var cardElement = document.createElement ('img');
  cardElement.setAttribute( 'src' , 'images/back.png');
  cardElement.setAttribute('data-id' , i);
  cardElement.addEventListener ('click' , flipCard)
  cardElement.classList.add ('card')
  document.getElementById("game-board").appendChild(cardElement)
  }
}

createBoard();

}
