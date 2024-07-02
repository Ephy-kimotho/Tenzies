import { nanoid } from "nanoid";

function allNewDice() {
  const newDice = [];
  for (let i = 0; i < 10; i++) {
    newDice.push(generateDie());
  }
  return newDice;
}

function generateDie() {
  const newDie = {
    id: nanoid(),
    value: getRandomNumber(),
    isHeld: false,
  };
  return newDie;
}

function getRandomNumber() {
  return Math.ceil(Math.random() * 6);
}

function formatTime(elapsedTime) {
  let minutes = Math.floor(elapsedTime / 60000); 
  let seconds = Math.floor((elapsedTime % 60000) / 1000); 

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${minutes}:${seconds}`;
}


export { allNewDice, generateDie, formatTime };
