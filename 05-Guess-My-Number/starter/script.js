'use strict';

let secretNumber;
let score;
let highscore = 0;

const updateScore = () => document.querySelector(`.score`).textContent = String(score);
const decrementScore = () => {
    score = Math.max(0, score - 1);
    updateScore();
}

const message = text => document.querySelector(`.message`).textContent = text;

const resetGame = () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    score = 20;
    updateScore();

    message("Start guessing...")

    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.guess`).value = ``;

    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
}

resetGame();

document
    .querySelector(`.check`)
    .addEventListener('click',
        function () {

            const guess = Number(document.querySelector(`.guess`).value);

            if (!guess) {
                message(`No number ... make a guess`);
            } else if (guess === secretNumber) {
                message(`correct number`);
                document.querySelector(`.number`).textContent = String(secretNumber);
                document.querySelector(`.number`).style.width = `30rem`;
                document.querySelector(`body`).style.backgroundColor = `#60b347`;
                
                highscore = Math.max(score, highscore);

                document.querySelector(`.highscore`).textContent = String(highscore);
            } else {
                decrementScore();
                if (score > 0) {
                    if (guess > secretNumber) {
                        message(`too high`);
                    } else {
                        message(`too low`);
                    }
                } else {
                    message(`you lost the game`);
                }
            }
        });

document
    .querySelector(`.again`)
    .addEventListener(`click`, resetGame);

