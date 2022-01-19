import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <h1 data-testid="feedback-text">_feedback_</h1>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ () => history.push('/ranking') }
        >
          ranking
        </button>
        <button type="button" data-testid="" onClick={ () => history.push('/') }>
          Jogar
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Feedback;
