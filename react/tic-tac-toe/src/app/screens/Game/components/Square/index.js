import React from 'react';

import styles from './styles.module.scss';

class Square extends React.Component {
  state = {
    value:null,
  };

  render() {
    const { value } = this.state;
    return (
      <button type="button" className={styles.square} onClick={() => this.setState({value: 'X'})}>
        {value}
      </button>
    );
  }
}

export default Square;
