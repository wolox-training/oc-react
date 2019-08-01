import React from 'react';

import styles from './Matches/styles.module.scss';

export function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const renderMoves = (step, move) => {
  const desc = move ? `Go to move # ${move}` : 'Go to game start';
  return (
    <li key={move}>
      <button type="button" onClick={() => this.jumpTo(move)}>{desc}</button>
    </li>
  );
};

export const getWinnerClass = isWinner => (isWinner ? styles.winner : '');
