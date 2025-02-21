const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');
const generateBtn = document.getElementById("b1");
const colorBox = document.getElementById("Color");
const heading = document.getElementById("Heading");

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
generateBtn.addEventListener('click', generateColor);

function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
    let hexColor = `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`;

    colorBox.style.backgroundColor = rgbColor;
    document.getElementById("color-text").textContent = rgbColor;
    document.getElementById("color-value").textContent = hexColor;
}

function rgbToHex(rgb) {
    let hex = Number(rgb).toString(16);
    return hex.length < 2 ? "0" + hex : hex;
}

function generateColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    
    redSlider.value = randomRed;
    greenSlider.value = randomGreen;
    blueSlider.value = randomBlue;
    
    updateColor();

    let newColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    heading.style.backgroundColor = newColor;
    generateBtn.style.backgroundColor = newColor;
}