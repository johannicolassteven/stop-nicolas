// Todas las letras del alfabeto
export const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/**
 * Filtra las letras disponibles según las excluidas y las ya usadas
 * @param {Array} excluded - letras que el usuario no quiere usar
 * @param {Array} used - letras que ya fueron seleccionadas
 * @returns {Array} - letras disponibles
 */
export function getAvailableLetters(excluded = [], used = []) {
  return allLetters.filter(
    (letter) => !excluded.includes(letter) && !used.includes(letter)
  );
}

/**
 * Obtiene una letra al azar de las disponibles
 * @param {Array} excluded - letras que el usuario no quiere usar
 * @param {Array} used - letras que ya fueron seleccionadas
 * @returns {string|null} - letra aleatoria o null si se acabaron
 */
export function getRandomLetter(excluded = [], used = []) {
  const available = getAvailableLetters(excluded, used);
  if (available.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * available.length);
  return available[randomIndex];
}

/**
 * Reinicia el juego devolviendo las letras usadas a cero
 * @returns {Array} - array vacío
 */
export function resetUsedLetters() {
  return [];
}
