import React from 'react';
import './BingoCard.css';

const BingoCard = ({ card, calledNumbers }) => {
  const isNumberCalled = (number) => {
    return calledNumbers.includes(number);
  };

  const getLetter = (columnIndex) => {
    const letters = ['B', 'I', 'N', 'G', 'O'];
    return letters[columnIndex];
  };

  return (
    <div className="bingo-card-container">
      <div className="bingo-card">
        {/* Header row with letters */}
        <div className="bingo-header">
          {['B', 'I', 'N', 'G', 'O'].map((letter, index) => (
            <div key={index} className="bingo-letter">
              {letter}
            </div>
          ))}
        </div>

        {/* Bingo card grid */}
        <div className="bingo-grid">
          {card.map((row, rowIndex) => (
            <div key={rowIndex} className="bingo-row">
              {row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`bingo-cell ${
                    cell === 'FREE' 
                      ? 'free-cell' 
                      : isNumberCalled(cell) 
                        ? 'called' 
                        : ''
                  }`}
                >
                  {cell === 'FREE' ? (
                    <span className="free-text">FREE</span>
                  ) : (
                    <span className="number">{cell}</span>
                  )}
                  {cell !== 'FREE' && isNumberCalled(cell) && (
                    <div className="marker">✓</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Card legend */}
      <div className="card-legend">
        <div className="legend-item">
          <div className="legend-box called"></div>
          <span>Called Numbers</span>
        </div>
        <div className="legend-item">
          <div className="legend-box free-cell"></div>
          <span>Free Space</span>
        </div>
        <div className="legend-item">
          <div className="legend-box"></div>
          <span>Available Numbers</span>
        </div>
      </div>
    </div>
  );
};

export default BingoCard;
