import React from "react";
import Confetti from "react-confetti";
import Header from "./components/Header";
import Die from "./components/Die";
import { allNewDice, generateDie, formatTime } from "./utils/utils";
import "./App.css";

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [tempRolls, setTempRolls] = React.useState(0);
  const [startTime, setStartTime] = React.useState(Date.now());
  const [elapsedTime, setElapsedTime] = React.useState(0);

  /* Lazy state initialization to help improve performance */
  const [leastRolls, setLeastRolls] = React.useState(() => {
    const savedLeastRolls = localStorage.getItem("leastRolls");
    return savedLeastRolls ? JSON.parse(savedLeastRolls) : 0;
  });

  const [leastTime, setLeastTime] = React.useState(() => {
    const savedLeastTime = localStorage.getItem("leastTime");
    return savedLeastTime ? JSON.parse(savedLeastTime) : 0;
  });

  React.useEffect(() => {
    if (tenzies) {
      if (leastRolls === 0 || tempRolls < leastRolls) {
        setLeastRolls(tempRolls);
      }

      const endTime = Date.now();
      const currentElapsedTime = endTime - startTime;
      setElapsedTime(currentElapsedTime);

      if (leastTime === 0 || elapsedTime < leastTime) {
        setLeastTime(elapsedTime);
      }
    }
  }, [tenzies, tempRolls, leastRolls, startTime, elapsedTime, leastTime]);

  React.useEffect(() => {
    const firstValue = dice[0].value;
    const allSameNumber = dice.every((die) => die.value === firstValue);
    const allHeld = dice.every((die) => die.isHeld);

    if (allHeld && allSameNumber) {
      setTenzies(true);
    }
  }, [dice]);

  React.useEffect(() => {
    localStorage.setItem("leastRolls", JSON.stringify(leastRolls));
  }, [leastRolls]);

  React.useEffect(() => {
    localStorage.setItem("leastTime", JSON.stringify(leastTime));
  }, [leastTime]);

  function rollDice() {
    if (tenzies) {
      /*=== GAME RESETS ===*/
      setTenzies(false);
      setTempRolls(0);
      setDice(allNewDice());
      setStartTime(Date.now());
    } else {
      setTempRolls((prevRoll) => prevRoll + 1);
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateDie();
        })
      );
    }
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function clearScoreBoard() {
    setLeastRolls(0);
    setLeastTime(0);
    localStorage.removeItem("leastRolls");
    localStorage.removeItem("leastTime");
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    );
  });

  return (
    <>
      {tenzies && <Confetti width={1200} />}

      <Header />
      <main>
        <section className="wrapper">
          <p className="game--instructions">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="scoreboard">
            <p className="scoreboard__rolls">
              Least Rolls: <span>{leastRolls === 0 ? "N/A" : leastRolls}</span>
            </p>
            <p className="scoreboard__time">
              Least Time:{" "}
              <span>{leastTime === 0 ? "N/A" : formatTime(leastTime)}</span>
            </p>
          </div>
          <div className="dice--container">{diceElements}</div>
          <div className="buttons">
            <button className="btn" onClick={rollDice}>
              {tenzies ? "Restart Game" : "Roll Dice"}
            </button>
            <button className="btn" onClick={clearScoreBoard}>
              clear scoreboard
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
