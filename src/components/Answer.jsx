import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkAnswerAct } from '../redux/actions';

class Answer extends Component {
  constructor() {
    super();

    this.state = {
      className: '',
      dataTest: '',
    };
  }

  componentDidMount() {
    setInterval(() => {
      const { checkAnswer } = this.props;
      if (checkAnswer) return this.checkQuestion();
    }, 10);
  }

  checkQuestion = (index) => {
    const { isCorrect } = this.props;
    if (isCorrect) {
      this.setState({ className: 'correct-answer', dataTest: 'correct-answer' });
    } else {
      this.setState({ className: 'wrong-answer', dataTest: 'wrong-answer-0' });
    }
  };

  render() {
    const { answer, checkQuestionProp } = this.props;
    const { className, dataTest } = this.state;
    return (
      <button
        data-testid={ dataTest }
        type="button"
        className={ `${className} bg-zinc-300 border
        border-zinc-400 p-6 w-full mb-5 hover:bg-sky-700` }
        onClick={ checkQuestionProp }
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

const mapStateToProps = (state) => ({
  checkAnswer: state.gameReducer.checking,
});

const mapDispatchToProps = (dispatch) => ({
  checkQuestionProp: () => dispatch(checkAnswerAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
