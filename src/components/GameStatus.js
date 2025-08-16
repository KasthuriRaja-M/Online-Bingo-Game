import React from 'react';
import './GameStatus.css';

const GameStatus = ({ currentNumber, calledNumbers, playerName }) => {
  const getLetter = (number) => {
    if (number >= 1 && number <= 15) return 'B';
    if (number >= 16 && number <= 30) return 'I';
    if (number >= 31 && number <= 45) return 'N';
    if (number >= 46 && number <= 60) return 'G';
    if (number >= 61 && number <= 75) return 'O';
    return '';
  };

  return (
    <div className="game-status">
      <div className="status-header">
        <h2>🎮 Game Status</h2>
        <div className="player-info">
          <span className="player-label">Player:</span>
          <span className="player-name">{playerName}</span>
        </div>
      </div>

      <div className="status-grid">
        <div className="status-card current-number">
          <h3>Current Number</h3>
          {currentNumber ? (
            <div className="number-display">
              <span className="number-letter">{getLetter(currentNumber)}</span>
              <span className="number-value">{currentNumber}</span>
            </div>
          ) : (
            <p className="no-number">No number called yet</p>
          )}
        </div>

        <div className="status-card game-progress">
          <h3>Game Progress</h3>
          <div className="progress-info">
            <div className="progress-item">
              <span className="progress-label">Called:</span>
              <span className="progress-value">{calledNumbers.length}/75</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(calledNumbers.length / 75) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="status-card recent-calls">
          <h3>Recent Calls</h3>
          <div className="recent-calls-list">
            {calledNumbers.slice(-3).reverse().map((number, index) => (
              <div key={index} className="recent-call">
                <span className="call-letter">{getLetter(number)}</span>
                <span className="call-number">{number}</span>
              </div>
            ))}
            {calledNumbers.length === 0 && (
              <p className="no-calls">No numbers called yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStatus;
