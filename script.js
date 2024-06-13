let selectedLetters = [];
let usedLetters = [];

function getRandomLetter() {
    const input = document.getElementById('letterInput').value.toUpperCase();
    selectedLetters = input.split('').filter(letter => /^[A-Z]$/.test(letter));

    if (selectedLetters.length === 0) {
        alert("Por favor, ingrese letras válidas.");
        return;
    }

    const availableLetters = selectedLetters.filter(letter => !usedLetters.includes(letter));

    if (availableLetters.length === 0) {
        alert("No quedan más letras disponibles.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableLetters.length);
    const randomLetter = availableLetters[randomIndex];

    usedLetters.push(randomLetter);
    document.getElementById('randomLetter').innerText = randomLetter;
}

function resetLetters() {
    usedLetters = [];
    document.getElementById('randomLetter').innerText = '';
}
