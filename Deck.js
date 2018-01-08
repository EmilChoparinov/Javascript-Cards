var reference = require('./Card');
var Card = reference.Card;

/**
 * base class for Deck
 */
class Deck {

    /**
     * @param {String} name name of deck
     */
    constructor(name) {
        this.deck = [];
        this.name = name;
    }

    /**
     * generates an in order deck
     */
    makeDeck() {
        this.reset();
        return this;
    }

    /**
     * resets a deck in order
     */
    reset() {
        //sets the deck back to being empty
        //this is necessary due to the fact the the deck
        //only gets items pushing to it
        this.deck = [];
        for (let suit = 0; suit < 4; suit++) {
            for (let value = 1; value <= 13; value++) {
                this.deck.push(new Card(value, suit));
            }
        }
        return this;
    }

    /**
     * randomly shuffles the deck O(n) time
     */
    shuffle() {

        /**
         * 
         * @param {Array} arr an array of values
         * @param {Number} i first index
         * @param {Number} j second index
         */
        let swap = function (arr, i, j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        };
        for (let i = 0; i < this.deck.length; i++) {
            let nextSwap = Math.floor(Math.random() * this.deck.length);
            swap(this.deck, i, nextSwap);
        }
        return this;
    }

    /**
     * gives a card
     * @returns {Card} card dealt
     */
    deal() {
        return this.deck.pop();
    }

    /**
     * returns the string representation of the Deck class
     */
    toString() {
        let s = `${this.name}:\n`;
        for (let i = 0; i < this.deck.length; i++) {
            s += this.deck[i].toString() + '\n';
        }
        s += `${this.deck.length} cards total`;
        return s;
    }

    /**
     * adds a card to the deck
     * @param {Card} card card to add to the deck
     */
    addCardToDeck(card) {
        if (card instanceof Card) {
            this.deck.push(card);
        }
    }
}

module.exports = {
    Deck: Deck
};