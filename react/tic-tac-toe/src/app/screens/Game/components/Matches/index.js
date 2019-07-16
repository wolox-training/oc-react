import React, { Component } from 'react';
import MatchesService from '../../../../../services/MatchesService';

import styles from './styles.module.scss'

var Spinner = require('react-spinkit');

const getWinnerClass = isWinner => isWinner ? styles.winner : '';

class MatchesList extends Component {
  state = {
    val: [],
    loading: true
  }

  componentDidMount (){
    const match = MatchesService.getMatches();
    match.then((resolve) => {
      this.setState({val: resolve.data, loading: false})
    });
  }

  render(){
    return (
      <div>
        <h1>Historial de juegos</h1>
        {this.state.loading ? <Spinner name="circle" color="purple"/> :
        this.state.val.map(item =>
          <li key= {item.id}><span className={getWinnerClass(item.winner === 'player_one')} >{item.player_one}</span> -
          <span className={getWinnerClass(item.winner === 'player_two')}>{item.player_two}</span> </li>)
        }
      </div>
    )
  }
};


export default MatchesList;
