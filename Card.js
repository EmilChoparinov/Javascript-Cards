class Card {
    constructor(suit, value) {
        if (typeof value == 'number' && typeof suit == 'string') {
            if (value >= 1 && value <= 13) this.value = value;
            switch (suit) {
                case 'club':
                    this.suit = suit;
                    break;
                case 'diamond':
                    this.suit = suit;
                    break;
                case 'heart':
                    this.suit = suit;
                    break;
                case 'spade':
                    this.suit = suit;
                    break;
                default:
                    throw new Error('not a suit');
            }
        }
    }

    toString() {
    }
}

module.exports = {
    Card: Card
};