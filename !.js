document.addEventListener('DOMContentLoaded', () => {
    const lettersContainer = document.getElementById('letters');
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Generar las casillas de verificación
    for (let letter of alphabet) {
        let label = document.createElement('label');
        label.classList.add('letter-checkbox');
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = letter;
        checkbox.checked = true; // Por defecto, todas las letras están marcadas
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(letter));
        lettersContainer.appendChild(label);
    }
});

let usedLetters = [];

function generateRandomLetter() {
    const checkboxes = document.querySelectorAll('#letters input[type="checkbox"]');
    const selectedLetters = Array.from(checkboxes)
                                 .filter(checkbox => checkbox.checked)
                                 .map(checkbox => checkbox.value);
    
    if (selectedLetters.length === 0) {
        alert('Por favor selecciona al menos una letra.');
        return;
    }

    // Filtrar las letras seleccionadas que no se han usado
    const availableLetters = selectedLetters.filter(letter => !usedLetters.includes(letter));

    if (availableLetters.length === 0) {
        alert('No quedan letras disponibles. Recarga la página para reiniciar.');
        return;
    }

    // Seleccionar una letra al azar de las disponibles
    const randomIndex = Math.floor(Math.random() * availableLetters.length);
    const randomLetter = availableLetters[randomIndex];

    // Mostrar la letra y añadirla a la lista de usadas
    document.getElementById('randomLetter').textContent = randomLetter;
    usedLetters.push(randomLetter);
}
