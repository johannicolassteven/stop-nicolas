import { useState } from "react";
import { allLetters } from "./letters";

export default function LetterSelector({ onStart }) {
  const [excludedLetters, setExcludedLetters] = useState([]);

  // Maneja el click en cada letra para excluir o incluir
  const toggleLetter = (letter) => {
    if (excludedLetters.includes(letter)) {
      setExcludedLetters(excludedLetters.filter((l) => l !== letter));
    } else {
      setExcludedLetters([...excludedLetters, letter]);
    }
  };

  // Maneja el inicio del juego
  const handleStart = () => {
    onStart(excludedLetters);
  };

  return (
    <div className="letter-selector-container">
      <h1 className="letter-selector-title">Selecciona las letras a excluir</h1>
      <div className="letters-grid">
        {allLetters.map((letter) => (
          <button
            key={letter}
            onClick={() => toggleLetter(letter)}
            className={`letter-button ${excludedLetters.includes(letter) ? "excluded" : ""}`}
          >
            {letter}
          </button>
        ))}
      </div>

      <button className="start-button" onClick={handleStart}>
        Comenzar juego
      </button>
    </div>
  );
}
