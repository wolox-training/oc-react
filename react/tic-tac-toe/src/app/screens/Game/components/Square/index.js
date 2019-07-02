import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Square({ onClick, index, value }) {
  return (
    <button type="button" className={styles.square} onClick={() => onClick(index)}>
      {value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired
};


export default Square;
