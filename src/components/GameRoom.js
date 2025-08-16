import React, { useState } from 'react';
import './GameRoom.css';

const GameRoom = ({ roomCode, players, isHost, onStartGame, onAddPlayer }) => {
  const [newPlayerName, setNewPlayerName] = useState('');

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (newPlayerName.trim() && !players.includes(newPlayerName.trim())) {
      onAddPlayer(newPlayerName.trim());
      setNewPlayerName('');
    }
  };

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
    alert('Room code copied to clipboard!');
  };

  return (
    <div className="game-room">
      <div className="room-info card">
        <h2>Game Room</h2>
        <div className="room-code-section">
          <p>Room Code:</p>
          <div className="room-code">
            <span className="code">{roomCode}</span>
            <button className="btn copy-btn" onClick={copyRoomCode}>
              📋 Copy
            </button>
          </div>
          <p className="share-text">Share this code with your friends!</p>
        </div>
      </div>

      <div className="players-section card">
        <h3>Players ({players.length})</h3>
        <div className="players-list">
          {players.map((player, index) => (
            <div key={index} className="player-item">
              <span className="player-name">{player}</span>
              {index === 0 && <span className="host-badge">👑 Host</span>}
            </div>
          ))}
        </div>

        {isHost && (
          <form onSubmit={handleAddPlayer} className="add-player-form">
            <input
              type="text"
              value={newPlayerName}
              onChange={(e) => setNewPlayerName(e.target.value)}
              placeholder="Add player name"
              maxLength="20"
            />
            <button type="submit" className="btn add-btn">
              Add Player
            </button>
          </form>
        )}
      </div>

      <div className="game-controls card">
        {isHost ? (
          <div className="host-controls">
            <p>You are the host. Start the game when everyone is ready!</p>
            <button 
              className="btn start-btn" 
              onClick={onStartGame}
              disabled={players.length < 2}
            >
              🎮 Start Game
            </button>
            {players.length < 2 && (
              <p className="warning">Need at least 2 players to start</p>
            )}
          </div>
        ) : (
          <div className="waiting-message">
            <p>Waiting for host to start the game...</p>
            <div className="loading-spinner"></div>
          </div>
        )}
      </div>

      <div className="game-rules card">
        <h3>Game Rules</h3>
        <ul>
          <li>🎯 Get 5 numbers in a row (horizontal, vertical, or diagonal)</li>
          <li>🎲 Host calls numbers randomly from 1-75</li>
          <li>✅ Mark numbers on your card when they're called</li>
          <li>🎉 First player to get BINGO wins!</li>
          <li>🆓 The center square is FREE</li>
        </ul>
      </div>
    </div>
  );
};

export default GameRoom;
