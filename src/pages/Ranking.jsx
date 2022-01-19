import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonGameAgain from '../components/ButtonGameAgain';
import { getItemLocalStore, setItemLocalStore } from '../helpers';

class Ranking extends Component {
  /*   orderScore(array) {
    const result = [];
    array.forEach((el, index) => {
      if (index === 0) return console.log('oi');
      if (el.score > el[index - 1]) return result.push(el);
    });
    return result;
  }
 */
  orderScore(array) {
    const NEGATIVE_ONE = -1;
    return array.sort((a, b) => {
      if (a.score < b.score) return 1;
      if (a.score > b.score) return NEGATIVE_ONE;
      return 0;
    });
  }

  /* orderScore(array) {
    return array.sort((a, b) => (a.score < b.score ? -1 : 0));
  }
 */
  createRanking() {
    const { userName, userPicture, userScore } = this.props;
    console.log(userName, userPicture, userScore);
    const player = {
      name: userName,
      score: userScore,
      picture: userPicture,
    };

    const PlayersStorage = getItemLocalStore('ranking');
    console.log(PlayersStorage);
    if (PlayersStorage === null) {
      const allPlayers = [player];
      setItemLocalStore('ranking', allPlayers);
      return allPlayers;
    }
    const allPlayers = [player, ...PlayersStorage];
    setItemLocalStore('ranking', allPlayers);

    return this.orderScore(allPlayers);
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <h data-testid="ranking-title">Ranking</h>
        {this.createRanking().map((user, index) => (
          <div key={ index }>
            <div data-testid="">
              <img src={ user.picture } alt="Gravatar" />
            </div>
            <div data-testid={ `player-name-${index}` }>{user.name}</div>
            <div data-testid={ `player-score-${index}` }>{user.score}</div>
          </div>
        ))}
        <div>
          <ButtonGameAgain history={ history } />
        </div>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  userName: PropTypes.string.isRequired,
  userPicture: PropTypes.string.isRequired,
  userScore: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => ({
  userName: state.player.name,
  userPicture: state.player.gravatarImg,
  userScore: state.player.score,
});

export default connect(mapStateToProps, null)(Ranking);
