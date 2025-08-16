import React, { useState, useEffect } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import GameRoom from './components/GameRoom';
import BingoCard from './components/BingoCard';
import NumberCaller from './components/NumberCaller';
import GameStatus from './components/GameStatus';

function App() {
  const [gameState, setGameState] = useState('login'); // login, waiting, playing, finished
  const [playerName, setPlayerName] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [roomCode, setRoomCode] = useState('');
  const [players, setPlayers] = useState([]);
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);

  const generateBingoCard = () => {
    const card = [];
    const numbers = Array.from({ length: 75 }, (_, i) => i + 1);
    
    // B column (1-15)
    const bNumbers = numbers.slice(0, 15).sort(() => Math.random() - 0.5).slice(0, 5);
    // I column (16-30)
    const iNumbers = numbers.slice(15, 30).sort(() => Math.random() - 0.5).slice(0, 5);
    // N column (31-45) - center is free
    const nNumbers = numbers.slice(30, 45).sort(() => Math.random() - 0.5).slice(0, 4);
    // G column (46-60)
    const gNumbers = numbers.slice(45, 60).sort(() => Math.random() - 0.5).slice(0, 5);
    // O column (61-75)
    const oNumbers = numbers.slice(60, 75).sort(() => Math.random() - 0.5).slice(0, 5);

    for (let i = 0; i < 5; i++) {
      card.push([
        bNumbers[i],
        iNumbers[i],
        i === 2 ? 'FREE' : nNumbers[i > 2 ? i - 1 : i],
        gNumbers[i],
        oNumbers[i]
      ]);
    }
    
    return card;
  };

  const [bingoCard, setBingoCard] = useState(generateBingoCard());

  const callNumber = () => {
    if (calledNumbers.length >= 75) return;
    
    const availableNumbers = Array.from({ length: 75 }, (_, i) => i + 1)
      .filter(num => !calledNumbers.includes(num));
    
    const randomNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    setCurrentNumber(randomNumber);
    setCalledNumbers(prev => [...prev, randomNumber]);
  };

  const checkBingo = () => {
    // Check rows
    for (let row = 0; row < 5; row++) {
      if (bingoCard[row].every(cell => cell === 'FREE' || calledNumbers.includes(cell))) {
        return true;
      }
    }
    
    // Check columns
    for (let col = 0; col < 5; col++) {
      if (bingoCard.every(row => row[col] === 'FREE' || calledNumbers.includes(row[col]))) {
        return true;
      }
    }
    
    // Check diagonals
    if (bingoCard.every((row, i) => row[i] === 'FREE' || calledNumbers.includes(row[i]))) {
      return true;
    }
    
    if (bingoCard.every((row, i) => row[4 - i] === 'FREE' || calledNumbers.includes(row[4 - i]))) {
      return true;
    }
    
    return false;
  };

  const startGame = () => {
    setGameStarted(true);
    setGameState('playing');
    setCalledNumbers([]);
    setCurrentNumber(null);
    setWinner(null);
  };

  const claimBingo = () => {
    if (checkBingo()) {
      setWinner(playerName);
      setGameState('finished');
    } else {
      alert('Not a valid bingo! Keep playing.');
    }
  };

  const resetGame = () => {
    setBingoCard(generateBingoCard());
    setCalledNumbers([]);
    setCurrentNumber(null);
    setGameStarted(false);
    setWinner(null);
    setGameState('waiting');
  };

  const joinRoom = (name, code) => {
    setPlayerName(name);
    setRoomCode(code);
    setIsHost(false);
    setGameState('waiting');
  };

  const createRoom = (name) => {
    setPlayerName(name);
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(code);
    setIsHost(true);
    setGameState('waiting');
    setPlayers([name]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">🎯 Online Bingo Game</h1>
        
        {gameState === 'login' && (
          <LoginScreen onJoinRoom={joinRoom} onCreateRoom={createRoom} />
        )}
        
        {gameState === 'waiting' && (
          <GameRoom 
            roomCode={roomCode}
            players={players}
            isHost={isHost}
            onStartGame={startGame}
            onAddPlayer={(name) => setPlayers(prev => [...prev, name])}
          />
        )}
        
        {gameState === 'playing' && (
          <div className="game-container">
            <GameStatus 
              currentNumber={currentNumber}
              calledNumbers={calledNumbers}
              playerName={playerName}
            />
            
            <div className="game-layout">
              <div className="left-panel">
                {isHost && (
                  <NumberCaller 
                    onCallNumber={callNumber}
                    calledNumbers={calledNumbers}
                    disabled={calledNumbers.length >= 75}
                  />
                )}
                <button className="btn claim-btn" onClick={claimBingo}>
                  🎉 Claim BINGO!
                </button>
              </div>
              
              <div className="center-panel">
                <BingoCard 
                  card={bingoCard}
                  calledNumbers={calledNumbers}
                />
              </div>
              
              <div className="right-panel">
                <h3>Called Numbers</h3>
                <div className="called-numbers">
                  {calledNumbers.map((num, index) => (
                    <span key={index} className="called-number">
                      {num}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {gameState === 'finished' && (
          <div className="game-over">
            <div className="card">
              <h2>🎉 Game Over! 🎉</h2>
              <p className="winner-text">Winner: {winner}</p>
              <button className="btn" onClick={resetGame}>
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
