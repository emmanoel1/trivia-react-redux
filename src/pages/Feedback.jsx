import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GameHeader from '../components/GameHeader';
import ButtonGameAgain from '../components/ButtonGameAgain';

class Feedback extends Component {
  constructor() {
    super();
    this.feedbackGenerator = this.feedbackGenerator.bind(this);
  }

  feedbackGenerator() {
    const threeCorrect = 3;
    const { props: { assertions } } = this;
    console.log('ACERTOS', assertions);
    return assertions >= threeCorrect ? 'Well Done!' : 'Could be better...';
  }

  render() {
    const {
      props: { assertions, score, history },
      feedbackGenerator,
    } = this;
    return (
      <div>
        <GameHeader />
        <h2 data-testid="feedback-text">{ feedbackGenerator() }</h2>
        <p>
          Correct Answers:
          <span data-testid="feedback-total-question">{ assertions }</span>
        </p>
        <p>
          Score:
          <span data-testid="feedback-total-score">{score}</span>
        </p>
        <ButtonGameAgain
          history={ history }
          dataTestid="btn-play-again"
        />

        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => history.push('/ranking') }
        >
          Ranking
        </button>

      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
