import React, { Component } from 'react';

import { calculateWinner, renderMoves } from './components/utils';
import styles from './styles.module.scss';
import Board from './components/Board';
import MatchesList from './components/Matches';

class Game extends Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true,
    winner: null
  };

  handleClick = (i) => {
    const { history, xIsNext, winner } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    const winnerCalculate = calculateWinner(squares);
    this.setState({
      winner: winnerCalculate,
      history: history.concat([{
        squares
      }]),
      stepNumber: history.length,
      xIsNext: !xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const { winner } = this.state;
    const moves = history.map(renderMoves);

    const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    return (
      <div className={styles.game}>
        <div className={styles.gameboard}>
          <Board status={status} squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={styles.gameinfo}>
          <ol>{moves}</ol>
        </div>
        <div className={styles.gameInfo}>
          <MatchesList/>
        </div>
      </div>
    );
  }
}

export default Game;
