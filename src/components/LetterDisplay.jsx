import { useState } from "react";
import { getRandomLetter, resetUsedLetters } from "./letters";

export default function LetterDisplay({ excludedLetters }) {
  const [currentLetter, setCurrentLetter] = useState(null);
  const [usedLetters, setUsedLetters] = useState([]);

  const handleNextLetter = () => {
    const nextLetter = getRandomLetter(excludedLetters, usedLetters);
    if (nextLetter) {
      setCurrentLetter(nextLetter);
      setUsedLetters([...usedLetters, nextLetter]);
    } else {
      alert("¡Se acabaron las letras disponibles!");
      setCurrentLetter(null);
    }
  };

  const handleReset = () => {
    setUsedLetters(resetUsedLetters());
    setCurrentLetter(null);
  };

  return (
    <div className="letter-display-container">
      <h1 className="letter-display-letter">{currentLetter || "?"}</h1>
      <div className="letter-display-buttons">
        <button className="button-next" onClick={handleNextLetter}>
          Siguiente letra
        </button>
        <button className="button-reset" onClick={handleReset}>
          Reiniciar
        </button>
      </div>
      <p className="letter-history">
        Letras usadas: {usedLetters.length > 0 ? usedLetters.join(", ") : "Ninguna"}
      </p>
    </div>
  );
}
