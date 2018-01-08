class Card {
    constructor(value, suit) {
        if (typeof value == 'number' && typeof suit == 'number') {
            if (value >= 1 && value <= 13) this.value = value;
            else throw new Error('not a valid card value');
            if (suit >= 0 && suit < 4) this.suit = suit;
            else throw new Error('not a valid suit');
        }
    }

    toString() {
        let strVal, suitVal;
        if (this.value >= 2 && this.value <= 10) strVal = this.value;
        else {
            switch (this.value) {
                case 1:
                    strVal = 'Ace';
                    break;
                case 11:
                    strVal = 'Jack';
                    break;
                case 12:
                    strVal = 'Queen';
                    break;
                case 13:
                    strVal = 'King';
                    break;
                default:
                    strVal = '';
            }
        }
        switch (this.suit) {
            case 0:
                suitVal = 'Clubs';
                break;
            case 1:
                suitVal = 'Diamonds';
                break;
            case 2:
                suitVal = 'Hearts';
                break;
            case 3:
                suitVal = 'Spades';
                break;
            default:
                throw new Error('not a suit');
        }

        return `${strVal} of ${suitVal}`;
    }
}

module.exports = {
    Card: Card
};