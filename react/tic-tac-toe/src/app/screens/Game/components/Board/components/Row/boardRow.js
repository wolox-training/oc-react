import React from 'react';
import PropTypes from 'prop-types';

import Square from './components/Square';
import styles from './components/Square/styles.module.scss';


function RenderRow ({ squares, onClick, indexes }) {
  return (
    <div className={styles.bordRow}>
      { indexes && indexes.map(i =>
        <Square key={i} value={squares[i]} index={i} onClick={onClick} />
      )}
    </div>
  );
}

RenderRow.propTypes = {
  indexes: PropTypes.arrayOf(PropTypes.number).isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
};

export default RenderRow;
