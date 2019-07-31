/* eslint-disable no-extra-parens */
import React, { Component, Fragment } from 'react';
import Spinner from 'react-spinkit';

import { getWinnerClass } from '../utils';
import MatchesService from '../../../../../services/MatchesService';

import { PLAYER_ONE, PLAYER_TWO } from './constants';

class MatchesList extends Component {
  state = {
    val: [],
    loading: true
  };

  componentDidMount() {
    const match = MatchesService.getMatches();
    match.then(resolve => {
      this.setState({ val: resolve.data, loading: false });
    });
  }

  render() {
    return (
      <Fragment>
        <h1>Historial de juegos</h1>
        {this.state.loading ? (
          <Spinner name="circle" color="purple" />
        ) : (
          this.state.val.map(item => (
            <li key={item.id}>
              <span className={getWinnerClass(item.winner === PLAYER_ONE)}>{item.player_one}</span> {' - '}
              <span className={getWinnerClass(item.winner === PLAYER_TWO)}>{item.player_two}</span>
            </li>
          ))
        )}
      </Fragment>
    );
  }
}

export default MatchesList;
