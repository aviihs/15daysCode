// Remove duplicate words declaration if already defined elsewhere
const wordText = document.querySelector('.word'),
hintText = document.querySelector('.hint'),
timerText = document.querySelector('.time b'),
inputField = document.querySelector('.input'),
refreshBtn = document.querySelector('.refresh-word'),
checkBtn = document.querySelector('.check-word');

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer); // Reset timer before starting new one
    timerText.innerText = maxTime;
    
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            timerText.innerText = maxTime;
        } else {
            clearInterval(timer);
            alert(`Game Over! Time is up. The correct word was: ${correctWord.toUpperCase()}`);
            initGame();
        }
    }, 1000);
};

const initGame = () => {
    let randomObject = words[Math.floor(Math.random() * words.length)]; // words array is already defined somewhere
    let wordArray = randomObject.word.split('');

    for (let i = wordArray.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[randomIndex]] = [wordArray[randomIndex], wordArray[i]];
    }

    wordText.innerText = wordArray.join('');
    hintText.innerText = randomObject.hint;
    correctWord = randomObject.word.toLowerCase();
    inputField.value = '';
    inputField.setAttribute("maxlength", correctWord.length);

    initTimer(30);
};

inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkBtn.click(); // Check button click garne jasto behavior
    }
});

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) {
        alert('Please enter a word.');
    } else if (userWord !== correctWord) {
        alert(`Oops! ${userWord} is not the correct word.`);
    } else {
        alert(`Congrats! ${userWord.toUpperCase()} is the correct word.`);
        initGame();
    }
};

refreshBtn.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord);

initGame();