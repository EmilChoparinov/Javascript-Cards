var reference = require('./Card');
var Card = reference.Card;

class Deck {
    constructor() {
        this.deck = [];
        this.reset();
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
        let s = 'The current deck:\n';
        for (let i = 0; i < this.deck.length; i++) {
            s += this.deck[i].toString() + '\n';
        }
        s += `${this.deck.length} cards total`;
        return s;
    }
}

let deck = new Deck();
deck.shuffle().shuffle();
console.log(deck.toString());