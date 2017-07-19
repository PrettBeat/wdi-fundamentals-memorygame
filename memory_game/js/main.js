var cards = ["Queen" , "Queen" , "King" , "King"];
var cardsInPlay = [];
var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert ("Congratulations! You found a match!")
    }
    else {
      alert ("Sorry. Please try again! You can do it!")
    }
  }
}
var flipCard = function (cardId) {
  console.log("User flipped " + cards[cardId])
  cardsInPlay.push (cards[cardId])
  checkForMatch()
}

flipCard(0)
flipCard(2)
