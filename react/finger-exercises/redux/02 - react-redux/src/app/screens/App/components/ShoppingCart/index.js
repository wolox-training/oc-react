import React, { PureComponent, Fragment } from 'react';
import { arrayOf, func } from 'prop-types';
import { booksSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import { connect } from 'react-redux';

import actionsCreators from '../../../../../redux/book/actions';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends PureComponent {
  state = {
    open: false
  };

  toggleContent = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => {
    const { addItem, removeItem } = this.props;
    return <Item key={item.id} item={item} addItem={addItem} removeItem={removeItem} />;
  };

  render() {
    const { booksSelected } = this.props;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.state.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{booksSelected.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total: {booksSelected.reduce(this.total, 0)}</h2>
        </div>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  booksSelected: arrayOf(booksSelectedPropType).isRequired,
  addItem: func.isRequired,
  removeItem: func.isRequired
};

const mapStateToProps = state => ({
  booksSelected: state.booksSelected
});

const mapDispatchToProps = dispatch => ({
  addItem: itemID => dispatch(actionsCreators.addItem(itemID)),
  removeItem: itemID => dispatch(actionsCreators.removeItem(itemID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
