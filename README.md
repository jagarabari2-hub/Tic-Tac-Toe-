# Tic-Tac-Toe Game

A classic implementation of the Tic-Tac-Toe (also known as Noughts and Crosses) game with a user-friendly interface and intelligent game mechanics.

## Table of Contents

- [Features](#features)
- [Project Overview](#project-overview)
- [File Descriptions](#file-descriptions)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Game Rules](#game-rules)
- [Technical Details](#technical-details)
- [Contributing](#contributing)
- [License](#license)

## Features

✨ **Game Features:**
- **Two-Player Mode**: Play against another player locally
- **AI Opponent**: Challenge the computer with an intelligent opponent
- **Interactive UI**: Clean and intuitive user interface
- **Real-time Game Status**: Display current game state and turn information
- **Win Detection**: Automatic detection of winning conditions and draws
- **Game Reset**: Easy restart functionality between games
- **Move Validation**: Prevents invalid moves and occupied positions
- **Visual Feedback**: Clear display of X's and O's on the game board

## Project Overview

This Tic-Tac-Toe game project provides a complete implementation of the classic board game. It features both human vs. human and human vs. AI gameplay modes, with a responsive design suitable for various platforms.

### Project Statistics
- **Version**: 1.0.0
- **Status**: Active
- **Last Updated**: 2026-01-06

## File Descriptions

This section describes the key files in the repository:

| File | Description |
|------|-------------|
| `README.md` | This file - project documentation and usage guide |
| `index.html` | Main HTML file containing the game structure and UI layout |
| `style.css` | CSS stylesheet for game styling and responsive design |
| `script.js` | JavaScript file containing game logic and AI implementation |
| `package.json` | NPM package configuration (if applicable) |
| `.gitignore` | Git configuration for ignored files |
| `LICENSE` | License information for the project |

### Typical File Structure

```
Tic-Tac-Toe-/
├── README.md              # Project documentation
├── index.html             # Main HTML file
├── style.css              # Stylesheet
├── script.js              # Game logic and AI
├── package.json           # Package configuration
├── .gitignore             # Git ignore file
└── LICENSE                # License file
```

## Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning the repository)
- No additional dependencies required for basic gameplay

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jagarabari2-hub/Tic-Tac-Toe-.git
   cd Tic-Tac-Toe-
   ```

2. **Open the Game**
   Simply open the `index.html` file in your web browser:
   - **Option A**: Double-click the `index.html` file
   - **Option B**: Right-click `index.html` → "Open with" → Select your browser
   - **Option C**: Use a local server (recommended for development)

3. **Using a Local Server (Optional but Recommended)**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```
   Then navigate to `http://localhost:8000` in your browser.

## Usage Guide

### Starting a Game

1. **Launch the Game**
   - Open `index.html` in your web browser
   - The game board will appear with 9 squares in a 3x3 grid

2. **Choose Game Mode**
   - Select "Play vs Player" for two-player mode
   - Select "Play vs AI" to challenge the computer
   - The game will indicate whose turn it is

3. **Making Moves**
   - Click on any empty square to place your mark (X or O)
   - The board will update immediately
   - In two-player mode, players alternate turns
   - In AI mode, the computer responds after your move

4. **Winning the Game**
   - Get three of your marks in a row (horizontal, vertical, or diagonal)
   - The game will announce the winner
   - A draw occurs if the board fills without any winner

5. **Resetting the Game**
   - Click the "New Game" or "Reset" button to start fresh
   - The board clears and the game restarts

### Game Controls

| Action | How to Perform |
|--------|--------|
| Make a move | Click on an empty board square |
| Restart game | Click the "New Game" button |
| Switch mode | Select game mode from the menu |
| View status | Check the status message display |

## Game Rules

The game follows standard Tic-Tac-Toe rules:

1. **Board Layout**: 3x3 grid with 9 squares
2. **Turn Order**: Players alternate turns (X starts first)
3. **Winning Condition**: First to get three marks in a line wins
   - Horizontal: Three in a row across the board
   - Vertical: Three in a column down the board
   - Diagonal: Three marks diagonally from corner to corner
4. **Draw Condition**: Board fills with no winner
5. **Invalid Moves**: Cannot place a mark on an occupied square

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, flexbox, and responsive design
- **JavaScript (Vanilla)**: Game logic, AI algorithm, and DOM manipulation

### Game Logic Components

#### Board Representation
- The game board is represented as a 1D or 2D array
- Empty squares are marked as empty/null
- Occupied squares store 'X' or 'O'

#### AI Implementation
- Uses minimax algorithm for optimal moves
- Evaluates all possible game states
- Chooses the best move to win or block opponent
- Provides challenging gameplay

#### Win Detection
- Checks all possible winning combinations (8 total)
- Validates after each move
- Returns winner or draw status

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

We welcome contributions! Here's how to help:

### Steps to Contribute

1. **Fork the Repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Tic-Tac-Toe-.git
   cd Tic-Tac-Toe-
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Modify the code as needed
   - Test thoroughly
   - Follow existing code style

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Description of your changes"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes and submit

### Contribution Guidelines
- Follow the existing code structure
- Add comments for complex logic
- Test your changes before submitting
- Keep commits focused and descriptive
- Respect the project's coding style

## License

This project is licensed under the MIT License - see the LICENSE file for details.

### MIT License Summary
- ✅ You can use this project commercially
- ✅ You can modify the code
- ✅ You can distribute it
- ⚠️ You must include the license and copyright notice
- ⚠️ No warranty is provided

## Support and Contact

For issues, questions, or suggestions:
- **GitHub Issues**: [Create an issue](https://github.com/jagarabari2-hub/Tic-Tac-Toe-/issues)
- **Author**: jagarabari2-hub
- **Repository**: https://github.com/jagarabari2-hub/Tic-Tac-Toe-

## Changelog

### Version 1.0.0 (2026-01-06)
- Initial release
- Implemented basic game mechanics
- Added AI opponent
- Created user-friendly interface
- Added comprehensive documentation

---

**Enjoy playing Tic-Tac-Toe! 🎮**

*Made with ❤️ by jagarabari2-hub*
