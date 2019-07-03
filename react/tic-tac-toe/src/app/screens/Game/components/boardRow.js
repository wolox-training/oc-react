import React from 'react';

import styles from '../styles.module.scss';

import Square from './Square';

export function RenderRow ({ squares, handleClick, indexes }) {
  return (
    <div className={styles.bordRow}>
      {indexes.map(i =>
        <Square key={i} value={squares[i]} index={i} onClick={handleClick} />
      )}
    </div>
  );
}
