var reference = require('./Card');
var Card = reference.Card;

class Deck {
    constructor(name) {
        this.deck = [];
        this.name = name;
    }

    makeDeck() {
        this.reset();
        return this;
    }
    reset() {
        for (let suit = 0; suit < 4; suit++) {
            for (let value = 1; value <= 13; value++) {
                this.deck.push(new Card(value, suit));
            }
        }
        return this;
    }

    shuffle() {
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

    deal() {
        return this.deck.pop();
    }

    toString() {
        let s = `${this.name}:\n`;
        for (let i = 0; i < this.deck.length; i++) {
            s += this.deck[i].toString() + '\n';
        }
        s += `${this.deck.length} cards total`;
        return s;
    }

    addCardToDeck(card) {
        if (card instanceof Card) {
            this.deck.push(card);
        }
    }
}

module.exports = { Deck: Deck }