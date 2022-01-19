import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GameHeader from '../components/GameHeader';

class Feedback extends Component {
  constructor() {
    super();
    this.feedbackGenerator = this.feedbackGenerator.bind(this);
  }

  feedbackGenerator() {
    const threeCorrect = 3;
    const { props: { assertions } } = this;
    return assertions >= threeCorrect ? 'Well Done!' : 'Could be better...';
  }

  render() {
    const {
      props: { assertions, score },
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
        <Link to="/">
          <button
            type="button"
            data-testid="btn-play-again"
          >
            Play Again
          </button>
        </Link>
        <Link to="/ranking">
          <button type="button" data-testid="btn-ranking">
            Ranking
          </button>
        </Link>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
