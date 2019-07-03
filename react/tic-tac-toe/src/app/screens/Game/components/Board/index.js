import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

import Square from '../Square';

import styles from './styles.module.scss';

function Board ({ status, squares, handleClick }) {
  const { boardRow } = styles;
  return (
    <Fragment>
      <div className={styles.status}>{status}</div>
      <div className={boardRow}>
        <Square value={squares[0]} index={0} onClick={handleClick} />
        <Square value={squares[1]} index={1} onClick={handleClick} />
        <Square value={squares[2]} index={2} onClick={handleClick} />
      </div>
      <div className={boardRow}>
        <Square value={squares[3]} index={3} onClick={handleClick} />
        <Square value={squares[4]} index={4} onClick={handleClick} />
        <Square value={squares[5]} index={5} onClick={handleClick} />
      </div>
      <div className={boardRow}>
        <Square value={squares[6]} index={6} onClick={handleClick} />
        <Square value={squares[7]} index={7} onClick={handleClick} />
        <Square value={squares[8]} index={8} onClick={handleClick} />
      </div>
    </Fragment>
  );
}

Board.propTypes = {
  handleClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired
};

export default Board;
