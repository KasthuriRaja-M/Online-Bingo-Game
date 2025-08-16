import React, { useState } from 'react';
import './LoginScreen.css';

const LoginScreen = ({ onJoinRoom, onCreateRoom }) => {
  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [mode, setMode] = useState('create'); // 'create' or 'join'

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (playerName.trim()) {
      onCreateRoom(playerName.trim());
    }
  };

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (playerName.trim() && roomCode.trim()) {
      onJoinRoom(playerName.trim(), roomCode.trim().toUpperCase());
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome to Bingo!</h2>
        
        <div className="mode-tabs">
          <button 
            className={`tab ${mode === 'create' ? 'active' : ''}`}
            onClick={() => setMode('create')}
          >
            Create Room
          </button>
          <button 
            className={`tab ${mode === 'join' ? 'active' : ''}`}
            onClick={() => setMode('join')}
          >
            Join Room
          </button>
        </div>

        <form onSubmit={mode === 'create' ? handleCreateRoom : handleJoinRoom}>
          <div className="form-group">
            <label htmlFor="playerName">Your Name:</label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          {mode === 'join' && (
            <div className="form-group">
              <label htmlFor="roomCode">Room Code:</label>
              <input
                type="text"
                id="roomCode"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                placeholder="Enter room code"
                maxLength="6"
                required
              />
            </div>
          )}

          <button type="submit" className="btn submit-btn">
            {mode === 'create' ? 'Create Room' : 'Join Room'}
          </button>
        </form>

        <div className="instructions">
          <h3>How to Play:</h3>
          <ul>
            <li>Create a room and share the code with friends</li>
            <li>Host calls numbers randomly</li>
            <li>Mark numbers on your card when called</li>
            <li>Get 5 in a row (horizontal, vertical, or diagonal) to win!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
