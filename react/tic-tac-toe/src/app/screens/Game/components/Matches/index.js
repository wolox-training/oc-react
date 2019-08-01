/* eslint-disable no-extra-parens */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { func, bool, arrayOf, shape, string } from 'prop-types';
import Spinner from 'react-spinkit';

import actionsCreators from '../../../../../redux/matches/actions';
import { getWinnerClass } from '../utils';

import { PLAYER_ONE, PLAYER_TWO } from './constants';

class MatchesList extends Component {
  componentDidMount() {
    this.props.getMatches(this.props.data);
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
  data: string.isRequired,
  getMatches: func.isRequired,
  loading: bool.isRequired,
  matches: arrayOf(shape({})).isRequired
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
)(MatchesList);
