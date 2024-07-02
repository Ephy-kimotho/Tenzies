# 🎲 TENZIES GAME

## 📜 INTRODUCTION
Tenzies is a fun and addictive dice game where the goal is to roll the dice until all of them show the same number. It's a great way to pass time and test your luck and strategy. This project implements the Tenzies game using React 18 and CSS3.

## 🎮 HOW TO PLAY
1. **Start the Game**: Click the "Roll Dice" button to roll all the dice.
2. **Hold Dice**: Click on any die to freeze it at its current value. Frozen dice won't be rolled in subsequent rolls.
3. **Roll Again**: Click the "Roll Dice" button to roll the unfrozen dice.
4. **Win the Game**: The game is won when all ten dice show the same number.
5. **Restart the Game**: After winning, click the "Restart Game" button to start a new game.

## 🖼️ SCREENSHOT
![Screenshot](./src/assets/tenzies.png)
[View live site](https://tenzies-0a3.netlify.app/)

## 🛠️ How I Built It
### Technologies Used
- **React 18**: For building the user interface and managing the game state.
- **CSS3**: For styling the game components and layout.

### 🌟 Key Features
- **Dice Rolling**: Each die shows a random number between 1 and 6.
- **Hold Dice**: Click to freeze dice at their current value.
- **Track Rolls and Time**: Keep track of the number of rolls and the time taken to win.
- **Local Storage**: Persist the least rolls and least time across sessions.
- **Confetti Effect**: Celebrate winning with a confetti effect.
- **Clear Scoreboard**: Option to clear the least rolls and least time records.

## 🧗 Challenges I Ran Into
1. **Managing Game State**: Ensuring that the game state was correctly updated after each roll and hold action.
2. **Time Tracking**: Implementing accurate tracking of the time taken to win the game.
3. **Local Storage Integration**: Persisting the least rolls and least time across browser sessions.
4. **Responsive Design**: Making sure the game looks good and is playable on various screen sizes.

## 📚 What I Learned
- **React State Management**: Deepened my understanding of React's state and effect hooks.
- **Time Handling in JavaScript**: Gained experience in working with time in JavaScript.
- **Local Storage**: Learned how to use local storage for persisting data.
- **Responsive Design**: Improved my skills in creating responsive layouts using CSS3.

## 🎉 What I'm Proud Of
I'm proud of successfully completing this game and implementing features like least rolls and least time tracking, which add a competitive edge to the game. The confetti effect upon winning adds a fun visual element, making the game more enjoyable.

## 📜 Conclusion
Building the Tenzies game was a rewarding experience that helped me improve my React and CSS skills. I hope you enjoy playing the game as much as I enjoyed building it!

## 🛠️ Installation and Usage
1. **Clone the Repository**: `https://github.com/Ephy-kimotho/Tenzies`
2. **Navigate to the Project Directory**: `cd tenzies-game`
3. **Install Dependencies**: `npm install`
4. **Start the Development Server**: `npm start`
5. **Play the Game**: Open `http://localhost:3000` in your browser.

Enjoy the game!
