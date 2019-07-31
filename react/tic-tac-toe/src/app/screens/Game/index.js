import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../redux/game/actions';

import { calculateWinner } from './components/utils';
import styles from './styles.module.scss';
import Board from './components/Board';
import MatchesList from './components/Matches';

class Game extends Component {
  renderMoves = (_, move) => {
    const desc = move ? `Go to move # ${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button type="button" onClick={() => this.props.goToMove(move)}>
          {desc}
        </button>
      </li>
    );
  };

  handleClick = i => {
    const { history, xIsNext, winner } = this.props;
    const current = history[history.length - 1];
    const squares = current.slice();

    if (winner || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';

    const winnerCalculate = calculateWinner(squares);
    this.props.addMove(squares);

    if (winnerCalculate) {
      this.props.setWinner(winnerCalculate);
    }
  };

  render() {
    const { winner, stepNumber, xIsNext } = this.props;
    const history = this.props.history.slice(0, stepNumber + 1);
    const current = history[stepNumber];
    const moves = history.map(this.renderMoves);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
      <div className={styles.game}>
        <div className={styles.gameboard}>
          <Board status={status} squares={current} onClick={this.handleClick} />
        </div>
        <div className={styles.gameinfo}>
          <ol>{moves}</ol>
        </div>
        <div className={styles.gameInfo}>
          <MatchesList />
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  addMove: PropTypes.func.isRequired,
  goToMove: PropTypes.func.isRequired,
  history: PropTypes.arrayOf.isRequired,
  setWinner: PropTypes.func.isRequired,
  stepNumber: PropTypes.string.isRequired,
  winner: PropTypes.string.isRequired,
  xIsNext: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
  winner: state.winner
});

const mapDispatchToProps = dispatch => ({
  addMove: i => dispatch(actionsCreators.addMove(i)),
  goToMove: step => dispatch(actionsCreators.goToMove(step)),
  setWinner: winner => dispatch(actionsCreators.setWinner(winner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
