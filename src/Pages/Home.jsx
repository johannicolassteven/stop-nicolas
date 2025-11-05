import { useState } from "react";
import LetterSelector from "../components/LetterSelector";
import LetterDisplay from "../components/LetterDisplay";

export default function Home() {
  const [excludedLetters, setExcludedLetters] = useState(null);

  const handleStart = (excluded) => {
    setExcludedLetters(excluded);
  };

  return (
    <>
      {!excludedLetters ? (
        <LetterSelector onStart={handleStart} />
      ) : (
        <LetterDisplay excludedLetters={excludedLetters} />
      )}
    </>
  );
}
