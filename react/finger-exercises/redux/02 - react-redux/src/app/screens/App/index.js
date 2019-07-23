import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { arrayOf, func } from 'prop-types';
import { booksPropType } from '@constants/propTypes';

import actionsCreators from '../../../redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.props.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.props.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.props.booksSelected.some(book => book.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.props.onSearch} />
          {this.props.books.length ? (
            this.props.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.props.booksSelected.length && <ShoppingCart />}
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  books: arrayOf(booksPropType).isRequired,
  removeItem: func.isRequired,
  onSearch: func.isRequired,
  addToCart: func.isRequired,
  booksSelected: arrayOf(booksPropType).isRequired,
  getBooks: func.isRequired
};

const mapStateToProps = state => ({
  books: state.books,
  booksSelected: state.booksSelected
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(actionsCreators.getBooks()),
  onSearch: value => dispatch(actionsCreators.searchBook(value)),
  addToCart: item => dispatch(actionsCreators.addToCart(item)),
  addItem: itemID => dispatch(actionsCreators.addItem(itemID)),
  removeItem: itemID => dispatch(actionsCreators.removeItem(itemID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
