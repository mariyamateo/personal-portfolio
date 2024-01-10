import React, { useState } from "react";

const GuessGame = () => {
  const [targetNumber, setTargetNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuessChange = (event) => {
    setGuess(parseInt(event.target.value));
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();

    if (guess === targetNumber) {
      setMessage(
        `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`
      );
    } else if (guess < targetNumber) {
      setMessage(`My number is greater than ${guess}`);
    } else {
      setMessage(`My number is less than ${guess}`);
    }

    setAttempts(attempts + 1);
    setGuess("");
  };

  const handleNewGame = () => {
    setTargetNumber(generateRandomNumber());
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div className="border w-96 mx-auto mt-32 shadow-lg rounded-md">
      <div className="m-12 flex flex-col items-center gap-12">
        <h3>Guess My Number Game</h3>
        <form onSubmit={handleGuessSubmit} className="flex flex-col">
          <input
            type="number"
            value={guess}
            className="text-black px-4 text-center"
            onChange={handleGuessChange}
            required
          />
          <button type="submit" className="bg-white text-black hover:bg-slate-500">Guess</button>
        </form>
        <p className="text-center">{message}</p>
        <button onClick={handleNewGame}>New Game</button>
      </div>
    </div>
  );
};

export default GuessGame;
