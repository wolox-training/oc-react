import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cardSelector } from './selector';

import hearthstoneActions from '../../../redux/hearthstone/actions';

import HearthstoneCard from './components/HearthstoneCard';
import './styles.css';

class HearthStoneCardList extends Component {
  componentWillMount() {
    this.props.dispatch(hearthstoneActions.getHearthstoneCards());
  }

  render() {
    if (this.props.loading) {
      return <h1>Loading...</h1>
    }

    return (
      <div className="hs-list">
        {this.props.cardList.map(HearthstoneCard)}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  cardList: cardSelector(store),
  loading: store.hearthstone.cardsLoading
});

export default connect(mapStateToProps)(HearthStoneCardList);
