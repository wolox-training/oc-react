import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import RenderRow from './boardRow';
import styles from './styles.module.scss';

function Board ({ status, squares, onClick }) {
  return (
    <Fragment>
      <div className={styles.status}>{status}</div>
      <RenderRow squares={squares} onClick={onClick} indexes={[0, 1, 2]} />
      <RenderRow squares={squares} onClick={onClick} indexes={[3, 4, 5]} />
      <RenderRow squares={squares} onClick={onClick} indexes={[6, 7, 8]} />
    </Fragment>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;
