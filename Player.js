var reference = require('./Card');
var Card = reference.Card;

/**
 * base player class
 */
class Player {

    /**
     * constructor
     * @param {String} name name of player
     */
    constructor(name) {
        this.hand = [];
        this.name = name;
    }

    /**
     * returns a string of the players hand
     */
    showHand() {
        let s = '------\n';
        for (var i = 0; i < this.hand.length; i++) {
            s += this.hand[i].toString() + '\n';
        }
        return s;
    }

    /**
     * Adds a card to the players hand
     * @param {Card} card card to add
     */
    addACard(card) {
        if (card instanceof Card) {
            this.hand.push(card);
        }
    }

    /**
     * returns the string representation of the Player class
     */
    toString() {
        let s = `${this.name}'s hand:\n`;
        s += this.showHand();
        return s;
    }

    /**
     * remove a card from the players deck
     */
    discard(){
        return this.hand.pop();
    }
}

module.exports = {
    Player: Player
};