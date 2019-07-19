import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool, arrayOf, shape } from 'prop-types';

import MatchesService from '../../../../../services/MatchesService';
import actionsCreators from '../../../../../redux/matches/actions';

import styles from './styles.module.scss';

const Spinner = require('react-spinkit');

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
      <div>
        <h1>Historial de juegos</h1>
        {this.props.loading || !this.props.matches ? (
          <Spinner name="circle" color="purple" />
        ) : (
          this.props.matches.map(item => (
            <li key={item.id}>
              <span className={getWinnerClass(item.winner === 'player_one')}>{item.player_one}</span> -
              <span className={getWinnerClass(item.winner === 'player_two')}>{item.player_two}</span>
            </li>
          ))
        )}
      </div>
    );
  }
}

MatchesList.propTypes = {
  getMatches: func.isRequired,
  loading: bool.isRequired,
  matches: arrayOf(shape({})).isRequired
};

const mapStateToProps = state => ({
  matches: state.matches,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getMatches: data => dispatch(actionsCreators.getMatches(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchesList);
