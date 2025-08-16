# 🎯 Online Bingo Game

A modern, interactive multiplayer Bingo game built with React. Play with friends in real-time with beautiful UI and smooth gameplay.

## 🚀 Features

### Core Game Features
- **Multiplayer Support**: Create rooms and invite friends with unique room codes
- **Real-time Gameplay**: Live number calling and card marking
- **Host Controls**: Host can call numbers and manage the game
- **Bingo Validation**: Automatic checking for valid BINGO patterns
- **Responsive Design**: Works perfectly on desktop and mobile devices

### Game Mechanics
- **Standard Bingo Rules**: 5x5 grid with B-I-N-G-O columns
- **Number Ranges**: 
  - B: 1-15, I: 16-30, N: 31-45, G: 46-60, O: 61-75
- **Free Space**: Center square is automatically marked
- **Win Conditions**: Horizontal, vertical, or diagonal lines
- **Random Number Generation**: Fair and unpredictable number calling

### User Interface
- **Modern Design**: Beautiful gradients and smooth animations
- **Interactive Cards**: Visual feedback for called numbers
- **Game Status**: Real-time progress tracking
- **Player Management**: Easy room joining and player addition
- **Mobile Responsive**: Optimized for all screen sizes

## 📋 Requirements

### Technical Requirements
- **Node.js**: Version 14.0 or higher
- **npm**: Version 6.0 or higher
- **React**: Version 18.2.0
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

### Game Requirements
- **Minimum Players**: 2 players to start a game
- **Maximum Numbers**: 75 total numbers (1-75)
- **Room Code**: 6-character alphanumeric codes
- **Player Names**: Unique names within a room

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Online-Bingo-Game
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

### 4. Open in Browser
The application will automatically open at `http://localhost:3000`

## 🎮 How to Play

### Creating a Game
1. **Enter Your Name**: Provide a unique player name
2. **Create Room**: Click "Create Room" to generate a room code
3. **Share Code**: Share the room code with friends
4. **Add Players**: Host can add additional players manually
5. **Start Game**: Host clicks "Start Game" when ready

### Joining a Game
1. **Enter Your Name**: Provide a unique player name
2. **Enter Room Code**: Input the 6-character room code
3. **Join Room**: Click "Join Room" to enter the game
4. **Wait for Host**: Wait for the host to start the game

### Playing the Game
1. **Number Calling**: Host clicks "Call Number" to call random numbers
2. **Marking Cards**: Numbers are automatically marked on your card
3. **Check for BINGO**: Look for 5 numbers in a row (horizontal, vertical, or diagonal)
4. **Claim Victory**: Click "Claim BINGO!" when you have a winning pattern
5. **Validation**: System checks if your BINGO is valid

### Game Rules
- **Objective**: Get 5 numbers in a row (including FREE space)
- **Valid Patterns**: Horizontal, vertical, or diagonal lines
- **FREE Space**: Center square counts as marked
- **Number Ranges**: Each column has specific number ranges
- **Fair Play**: Numbers are called randomly without repetition

## 🏗️ Project Structure

```
Online-Bingo-Game/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── LoginScreen.js
│   │   ├── LoginScreen.css
│   │   ├── GameRoom.js
│   │   ├── GameRoom.css
│   │   ├── BingoCard.js
│   │   ├── BingoCard.css
│   │   ├── NumberCaller.js
│   │   ├── NumberCaller.css
│   │   ├── GameStatus.js
│   │   └── GameStatus.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 UI Components

### LoginScreen
- Room creation and joining interface
- Player name input
- Room code management
- Game instructions

### GameRoom
- Room code display and copying
- Player list management
- Host controls
- Game rules display

### BingoCard
- Interactive 5x5 grid
- Visual number marking
- FREE space indicator
- Card legend

### NumberCaller
- Random number generation
- Call statistics
- Number range display
- Recent calls history

### GameStatus
- Current number display
- Game progress tracking
- Player information
- Recent calls list

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App

## 🌟 Features in Detail

### Responsive Design
- **Desktop**: Full-featured layout with side panels
- **Tablet**: Optimized grid layout
- **Mobile**: Stacked layout for touch interaction

### Visual Feedback
- **Hover Effects**: Interactive elements with smooth transitions
- **Animations**: Card marking and number calling animations
- **Color Coding**: Different colors for called numbers and FREE space
- **Progress Indicators**: Visual game progress tracking

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Semantic HTML structure
- **Color Contrast**: High contrast for readability
- **Touch Friendly**: Large touch targets for mobile

## 🐛 Troubleshooting

### Common Issues
1. **Port Already in Use**: Change port with `PORT=3001 npm start`
2. **Dependencies Issues**: Delete `node_modules` and run `npm install`
3. **Browser Compatibility**: Ensure you're using a modern browser

### Performance Tips
- Close unnecessary browser tabs
- Use a wired internet connection for multiplayer
- Ensure sufficient RAM (4GB+ recommended)

## 📱 Browser Support

- **Chrome**: Version 90+
- **Firefox**: Version 88+
- **Safari**: Version 14+
- **Edge**: Version 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎉 Enjoy Playing!

Have fun playing Bingo with your friends! The game is designed to be intuitive, engaging, and accessible to players of all ages.
