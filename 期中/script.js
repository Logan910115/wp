let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    const guessInput = document.getElementById('guess-input');
    const result = document.getElementById('result');
    const userGuess = Number(guessInput.value);
    
    attempts++;
    
    if (userGuess === randomNumber) {
        result.textContent = `恭喜！你猜對了！你用了 ${attempts} 次猜中。`;
        result.style.color = 'green';
    } else if (userGuess > randomNumber) {
        result.textContent = '太高了，請再試一次。';
        result.style.color = 'red';
    } else if (userGuess < randomNumber) {
        result.textContent = '太低了，請再試一次。';
        result.style.color = 'red';
    }
}
