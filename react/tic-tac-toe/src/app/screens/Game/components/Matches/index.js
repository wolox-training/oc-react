/* eslint-disable no-extra-parens */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, bool, arrayOf, shape, number, string } from 'prop-types';
import Spinner from 'react-spinkit';

import MatchesService from '../../../../../services/MatchesService';
import actionsCreators from '../../../../../redux/matches/actions';

import styles from './styles.module.scss';
import { PLAYER_ONE, PLAYER_TWO } from './constants';

const getWinnerClass = isWinner => (isWinner ? styles.winner : '');

class MatchesList extends Component {
  componentDidMount() {
    const match = MatchesService.getMatches();
    match.then(resolve => {
      this.props.getMatches(resolve.data);
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Historial de juegos</h1>
        {this.props.loading || !this.props.matches ? (
          <Spinner name="circle" color="purple" />
        ) : (
          this.props.matches.map(item => (
            <li key={item.id}>
              <span className={getWinnerClass(item.winner === PLAYER_ONE)}>{item.player_one}</span> {'-'}
              <span className={getWinnerClass(item.winner === PLAYER_TWO)}>{item.player_two}</span>
            </li>
          ))
        )}
      </Fragment>
    );
  }
}

MatchesList.propTypes = {
  getMatches: func.isRequired,
  loading: bool.isRequired,
  matches: arrayOf(shape({ id: number, winner: string })).isRequired
};

const mapStateToProps = state => ({
  matches: state.matches.matches,
  loading: state.matches.loading
});

const mapDispatchToProps = dispatch => ({
  getMatches: data => dispatch(actionsCreators.getMatches(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchesList);
