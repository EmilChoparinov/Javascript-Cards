var deckReference = require("./Deck");
var playerReference = require("./Player");
var Deck = deckReference.Deck;
var Player = playerReference.Player;

let deck = new Deck("deck").makeDeck();
let discardPile = new Deck("discarded pile");
deck.shuffle().shuffle();
let player1 = new Player("player1"), player2 = new Player("player2");
player1.addACard(deck.deal());
player2.addACard(deck.deal());
player1.addACard(deck.deal());
player2.addACard(deck.deal());
player1.addACard(deck.deal());
player2.addACard(deck.deal());
player1.addACard(deck.deal());
player2.addACard(deck.deal());
console.log(player1 + ""); //tostring
console.log(player2.toString());
discardPile.addCardToDeck(player1.discard());
discardPile.addCardToDeck(player2.discard());
console.log(discardPile.toString());