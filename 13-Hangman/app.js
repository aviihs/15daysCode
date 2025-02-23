// Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

// Options
let options = {
  fruits: ["Apple", "Blueberry", "Mandarin", "Pineapple", "Pomegranate", "Watermelon"],
  animals: ["Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra"],
  countries: ["India", "Hungary", "Kyrgyzstan", "Switzerland", "Zimbabwe", "Dominica"],
};

// Game Variables
let winCount = 0;
let count = 0;
let chosenWord = "";

// Display Options
const displayOptions = () => {
  optionsContainer.innerHTML = `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    let button = document.createElement("button");
    button.classList.add("options");
    button.innerText = value;
    button.addEventListener("click", () => generateWord(value));
    buttonCon.appendChild(button);
  }
  optionsContainer.appendChild(buttonCon);
};

// Block All Buttons (Game Over)
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");

  // Enable options to allow category selection
  optionsButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("active");
  });

  // Disable letters
  letterButtons.forEach((button) => {
    button.disabled = true;
  });

  // Show new game container
  newGameContainer.classList.remove("hide");

  // Display Game Over message
  resultText.innerHTML += `<h3>Game Over</h3>`;
};

// Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");

  // Highlight selected option and disable others
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  // Show letters, reset user input
  letterContainer.classList.remove("hide");
  userInputSection.innerHTML = "";

  // Choose a random word
  let optionArray = options[optionValue];
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)].toUpperCase();

  // Replace letters with underscores
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');
  userInputSection.innerHTML = displayItem;
};

// Initialize Game
const initializer = () => {
  winCount = 0;
  count = 0;

  // Reset everything
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  // Enable category selection
  displayOptions();

  // Create letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    button.innerText = String.fromCharCode(i);
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");

      // Check if letter is in the word
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          if (char === button.innerText) {
            dashes[index].innerText = char;
            winCount++;
            if (winCount === charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              blocker();
            }
          }
        });
      } else {
        count++;
        drawMan(count);
        if (count === 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  // Clear & draw initial canvas
  let { initialDrawing } = canvasCreator();
  initialDrawing();
};

// Canvas Functions
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  // Draw lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  // Body parts
  const head = () => { context.beginPath(); context.arc(70, 30, 10, 0, Math.PI * 2, true); context.stroke(); };
  const body = () => { drawLine(70, 40, 70, 80); };
  const leftArm = () => { drawLine(70, 50, 50, 70); };
  const rightArm = () => { drawLine(70, 50, 90, 70); };
  const leftLeg = () => { drawLine(70, 80, 50, 110); };
  const rightLeg = () => { drawLine(70, 80, 90, 110); };

  // Initial Frame
  const initialDrawing = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawLine(10, 130, 130, 130); // Bottom
    drawLine(10, 10, 10, 131); // Left
    drawLine(10, 10, 70, 10); // Top
    drawLine(70, 10, 70, 20); // Small top
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

// Draw Hangman
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1: head(); break;
    case 2: body(); break;
    case 3: leftArm(); break;
    case 4: rightArm(); break;
    case 5: leftLeg(); break;
    case 6: rightLeg(); blocker(); break;
  }
};

// New Game Button
newGameButton.addEventListener("click", initializer);

// Load Game
window.onload = initializer;