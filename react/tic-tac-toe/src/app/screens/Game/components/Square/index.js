import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

class Square extends React.Component {
  handleClick= () => this.props.onClick(this.props.index)

  render() {
    const { value } = this.props;
    return (
      <button type="button" className={styles.square} onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

Square.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
};


export default Square;
