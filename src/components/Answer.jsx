import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Answer extends Component {
  constructor() {
    super();

    this.state = {
      className: '',
      dataTest: '',
    };
  }

  checkQuestion = (index) => {
    const { isCorrect } = this.props;
    if (isCorrect) {
      this.setState({ className: 'correct-answer', dataTest: 'correct-answer' });
    } else {
      this.setState({ className: 'wrong-answer', dataTest: `wrong-answer-${index}` });
    }
  };

  render() {
    const { answer, index } = this.props;
    const { className, dataTest } = this.state;
    return (
      <button
        data-testid={ dataTest }
        type="button"
        className={ `${className} bg-zinc-300 border
        border-zinc-400 p-6 w-full mb-5 hover:bg-sky-700` }
        onClick={ () => this.checkQuestion(index) }
      >
        {answer}
      </button>
    );
  }
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

export default Answer;
