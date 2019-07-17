import React, { Component, Fragment } from 'react';
import MatchesService from '../../../../../services/MatchesService';
import { getWinnerClass } from '../../components/utils';

var Spinner = require('react-spinkit');

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
    const {loading, val} = this.state
    return (
      <Fragment>
        <h1>Historial de juegos</h1>
        {loading ? <Spinner name="circle" color="purple"/> :
        val.map(item =>
          <li key= {item.id}><span className={getWinnerClass(item.winner === 'player_one')} >{item.player_one}</span> -
          <span className={getWinnerClass(item.winner === 'player_two')}>{item.player_two}</span> </li>)
        }
      </Fragment>
    )
  }
};


export default MatchesList;
