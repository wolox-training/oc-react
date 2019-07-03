import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { RenderRow } from '../boardRow';

import styles from './styles.module.scss';

function Board ({ status, squares, handleClick }) {
  const { boardRow } = styles;
  return (
    <Fragment>
      <div className={styles.status}>{status}</div>
      <div className={boardRow}>
        <RenderRow squares={squares} handleClick={handleClick} indexes={[0, 1, 2]} />
      </div>
      <div className={boardRow}>
        <RenderRow squares={squares} handleClick={handleClick} indexes={[3, 4, 5]} />
      </div>
      <div className={boardRow}>
        <RenderRow squares={squares} handleClick={handleClick} indexes={[6, 7, 8]} />
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
