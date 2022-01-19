import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonGameAgain from '../components/ButtonGameAgain';
import { getItemLocalStore } from '../helpers';

class Ranking extends Component {
  render() {
    const { history } = this.props;
    const ranking = getItemLocalStore('ranking');
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        {ranking.map((user, index) => (
          <div key={ index }>
            <div data-testid="">
              <img src={ user.picture } alt="Gravatar" />
            </div>
            <div data-testid={ `player-name-${index}` }>{user.name}</div>
            <div data-testid={ `player-score-${index}` }>{user.score}</div>
          </div>
        ))}
        <div>
          <ButtonGameAgain history={ history } dataTestid="btn-go-home" />
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Ranking;
