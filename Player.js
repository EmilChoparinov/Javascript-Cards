var reference = require("./Card");
var Card = reference.Card;

class Player {
    constructor(name) {
        this.hand = [];
        this.name = name;
    }
    showHand() {
        let s = "------\n";
        for (var i = 0; i < this.hand.length; i++) {
            s += this.hand[i].toString() + "\n"
        }
        return s;
    }

    addACard(card) {
        if (card instanceof Card) {
            this.hand.push(card);
        }
    }

    toString() {
        let s = `${this.name}'s hand:\n`;
        s += this.showHand();
        return s;
    }

    discard(){
        return this.hand.pop();
    }
}

module.exports = {
    Player: Player
};