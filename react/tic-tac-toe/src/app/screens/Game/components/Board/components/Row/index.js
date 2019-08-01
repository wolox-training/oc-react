import React from 'react';
import PropTypes from 'prop-types';

import { indexes } from '../../constants';

import Square from './components/Square';
import styles from './components/Square/styles.module.scss';

function RenderRow({ squares, onClick, rowIndex }) {
  return (
    <div className={styles.bordRow}>
      {indexes &&
        indexes.map(i => (
          <Square
            key={i + rowIndex * 3}
            value={squares[i + rowIndex * 3]}
            index={i + rowIndex * 3}
            onClick={onClick}
          />
        ))}
    </div>
  );
}

RenderRow.propTypes = {
  rowIndex: PropTypes.arrayOf(PropTypes.number).isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
};

export default RenderRow;
