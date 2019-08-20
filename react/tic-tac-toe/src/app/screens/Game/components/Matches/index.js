/* eslint-disable no-extra-parens */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, shape, number, string } from 'prop-types';

import withLoading from '../WithLoading';
import actionsCreators from '../../../../../redux/matches/actions';
import { getWinnerClass } from '../utils';

import { PLAYER_ONE, PLAYER_TWO } from './constants';

class MatchesList extends Component {
  componentDidMount() {
    this.props.getMatches();
  }

  render() {
    return (
      <Fragment>
        <h1>Historial de juegos</h1>
        {this.props.matches.map(item => (
          <li key={item.id}>
            <span className={getWinnerClass(item.winner === PLAYER_ONE)}>{item.player_one}</span> {'-'}
            <span className={getWinnerClass(item.winner === PLAYER_TWO)}>{item.player_two}</span>
          </li>
        ))}
      </Fragment>
    );
  }
}

MatchesList.propTypes = {
  getMatches: func.isRequired,
  matches: arrayOf(shape({ id: number, winner: string })).isRequired
};

const mapStateToProps = state => ({
  matches: state.matches.matches,
  loading: state.matches.loading
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(actionsCreators.getMatches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLoading(MatchesList));
