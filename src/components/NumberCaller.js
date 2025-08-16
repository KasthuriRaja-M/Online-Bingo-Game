import React from 'react';
import './NumberCaller.css';

const NumberCaller = ({ onCallNumber, calledNumbers, disabled }) => {
  const getLetter = (number) => {
    if (number >= 1 && number <= 15) return 'B';
    if (number >= 16 && number <= 30) return 'I';
    if (number >= 31 && number <= 45) return 'N';
    if (number >= 46 && number <= 60) return 'G';
    if (number >= 61 && number <= 75) return 'O';
    return '';
  };

  const getAvailableNumbers = () => {
    const allNumbers = Array.from({ length: 75 }, (_, i) => i + 1);
    return allNumbers.filter(num => !calledNumbers.includes(num));
  };

  const availableNumbers = getAvailableNumbers();

  return (
    <div className="number-caller">
      <h3>🎲 Number Caller</h3>
      
      <div className="caller-stats">
        <div className="stat-item">
          <span className="stat-label">Called:</span>
          <span className="stat-value">{calledNumbers.length}/75</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Remaining:</span>
          <span className="stat-value">{availableNumbers.length}</span>
        </div>
      </div>

      <button 
        className="btn call-btn" 
        onClick={onCallNumber}
        disabled={disabled}
      >
        🎯 Call Number
      </button>

      {disabled && (
        <p className="game-complete">All numbers have been called!</p>
      )}

      <div className="number-ranges">
        <h4>Number Ranges:</h4>
        <div className="ranges-grid">
          <div className="range-item">
            <span className="range-letter">B</span>
            <span className="range-numbers">1-15</span>
          </div>
          <div className="range-item">
            <span className="range-letter">I</span>
            <span className="range-numbers">16-30</span>
          </div>
          <div className="range-item">
            <span className="range-letter">N</span>
            <span className="range-numbers">31-45</span>
          </div>
          <div className="range-item">
            <span className="range-letter">G</span>
            <span className="range-numbers">46-60</span>
          </div>
          <div className="range-item">
            <span className="range-letter">O</span>
            <span className="range-numbers">61-75</span>
          </div>
        </div>
      </div>

      <div className="recent-numbers">
        <h4>Recently Called:</h4>
        <div className="recent-list">
          {calledNumbers.slice(-5).reverse().map((number, index) => (
            <div key={index} className="recent-number">
              <span className="recent-letter">{getLetter(number)}</span>
              <span className="recent-value">{number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberCaller;
