import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {indexes} from './constants';
import RenderRow from './components/Row';
import styles from './styles.module.scss';

function Board ({ status, squares, onClick }) {
  return (
    <Fragment>
      <div className={styles.status}>{status}</div>
      {indexes.map(index => <RenderRow squares={squares} onClick={onClick} rowIndex={index} />)}
    </Fragment>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;
