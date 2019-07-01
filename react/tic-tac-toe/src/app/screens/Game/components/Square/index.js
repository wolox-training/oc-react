import React from 'react';

import styles from './styles.module.scss';

class Square extends React.Component {
  render() {
    const {onClick, index, value} = this.props;
    return (
      <button type="button" className={styles.square}
      onClick={() => onClick(index)}>
        {value}
      </button>
    );
  }
}

export default Square;
