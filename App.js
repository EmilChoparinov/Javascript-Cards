var deckReference = require('./Deck');
var playerReference = require('./Player');
var Deck = deckReference.Deck;
var Player = playerReference.Player;
var Rpn = require('rpncc');
var rpn = new Rpn();
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Game {
    constructor() {
        this.deck = new Deck('24').makeDeck().shuffle().shuffle();
    }

    getCards() {
        let r = [];
        for (let i = 0; i < 4; i++) r.push(this.deck.deal());
        return r;
    }
}

function showCards(cards) {
    if (cards instanceof Array) {
        let s = "";
        for (let i = 0; i < cards.length; i++) {
            s += cards[i].toString();
            if (cards[i].value == 1 || cards[i].value >= 11) s += `(${cards[i].value})`;
            s += "\n";
        }
        return s;
    }
}

function reversePolishNotation(s) {
    if (typeof s == 'string') {
        let numbers = [], operators = [];
        for (let i = 0; i < s.length; i++) {
            if (parseInt(s[i])) {
                let curNum = s[i];
                let k = i + 1;
                while (parseInt(s[k]) >= 0) {
                    curNum += s[k];
                    k++;
                }
                numbers.push(parseInt(curNum));
                if (k < s.length) operators.push(s[k]);
                i = k;
            }
        }
        return { numbers: numbers, operators: operators };
    }
}

function calculate(numbers, operators) {
    if (numbers instanceof Array && operators instanceof Array) {
        let n;
        while (numbers.length > 1) {
            let first = numbers.pop(), second = numbers.pop();
            let operator = operators.pop();
            switch (operator) {
                case '*':
                    first *= second;
                    break;
                case '+':
                    first += second;
                    break;
                case '-':
                    first -= second;
                    break;
                case '/':
                    first = Math.floor(second / first);
                    break;
            }
            n = first;
            numbers.push(first);
        }
        return n;
    }
}

function isValid(attempt, cards) {
    if (cards instanceof Array && attempt instanceof Array) {
        for (let i = 0; i < attempt.length; i++) {
            let found = false;
            for (let j = 0; j < cards.length; j++) {
                if (cards[j].value == attempt[i]) {
                    found = true;
                    break;
                }
            }
            if (!found) return false;
        }
        return true;
    }
}

/**
 * async reader per line
 */
async function readLine() {
    let promise = new Promise((resolve, reject) => {
        rl.question('Please enter your answer for this set: ', function (val) {
            resolve(val);
        });
    });
    return promise;
};

function parseToArray(s) {
    if (typeof s == 'string') {
        let a = [];
        for (let i = 0; i < s.length; i++) {
            if (parseInt(s[i]) && parseInt(s[i]) >= 0) {
                let k = i + 1;
                let f = s[i];
                while (parseInt(s[k]) >= 0) {
                    f += s[k];
                    k++;
                }
                a.push(f);
                i = k - 1;
            } else {
                a.push(s[i]);
            }
        }
        return a;
    }
}

/**
 * runner for async reader
 */
async function run() {
    let game = new Game();
    while (true && game.deck.deck.length >= 4) {
        let cards = game.getCards();
        console.log(showCards(cards));
        let s = await readLine();
        if (s == "Exit") {
            console.log('Thanks for playing!');
            process.exit(0);
        }
        let attempt = reversePolishNotation(s);
        if (isValid(attempt.numbers, cards)) {
            let polish = parseToArray(s);
            polish = rpn.convert(polish);
            let num = rpn.calculate(polish);
            if (num != 24) {
                console.log(`Your guess was ${num}! Not 24!`);
            } else {
                console.log(`Correct!`);
            }
        } else {
            console.log(`Your guess was invalid!`);
            console.log(attempt.numbers, attempt.operators);
        }
    }
}

run();