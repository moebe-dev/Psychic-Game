var guessCount = 9;
var letter;
var userGuess;
var wins = 0;
var loss = 0;
var guesses = [];

const abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

document.onkeyup = function (event) {
    userGuess = event.key;

    if (letter === undefined) {
        letter = abc[Math.floor(Math.random() * abc.length)];
    }

    if (userGuess != 0) {
        if (abc.includes(userGuess)) {
            if (userGuess === letter) {
                wins++;
                guessCount = 9;
                letter = undefined;
                guesses = [];
                document.getElementById("wins").innerText = wins;

                alert("You Won!");
            } else {
                if (guesses.includes(userGuess)) {
                    alert("Already guessed");
                } else {
                    guessCount--;
                    guesses.push(userGuess);
                    document.getElementById("guessesLeft").innerText = guessCount;
                    document.getElementById("guesses").innerText = guesses;
                }
            }
        } else {
            alert("Type A letter!");
        }

        if (guessCount === 0) {
            loss++;
            guessCount = 9;
            guesses = [];
            letter = undefined;
            alert("You Lost, Try again!");
            document.getElementById("loss").innerText = loss;
            document.getElementById("guessesLeft").innerText = guessCount;
            document.getElementById("wins").innerText = wins;
        }
    }
};
