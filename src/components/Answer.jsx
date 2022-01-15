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
    const TEN = 10;
    setInterval(() => {
      const { checkAnswer, index } = this.props;
      if (checkAnswer) return this.checkQuestion(index);
    }, TEN);
  }

  checkQuestion = (index) => {
    const { isCorrect } = this.props;
    if (isCorrect) {
      this.setState({ className: 'correct-answer', dataTest: 'correct-answer' });
    } else {
      this.setState({ className: 'wrong-answer', dataTest: `wrong-answer-${index}` });
    }
  };

  onClickAnswer = () => {
    const { checkQuestionProp } = this.props;
    checkQuestionProp();
  };

  render() {
    //
    const { answer } = this.props;
    const { className, dataTest } = this.state;
    return (
      <button
        data-testid={ dataTest }
        type="button"
        className={ `${className} bg-zinc-300 border
        border-zinc-400 p-6 w-full mb-5 hover:bg-sky-700` }
        onClick={ () => this.onClickAnswer() }
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
  checkQuestionProp: PropTypes.func.isRequired,
  checkAnswer: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  checkAnswer: state.gameReducer.checking,
});

const mapDispatchToProps = (dispatch) => ({
  checkQuestionProp: () => dispatch(checkAnswerAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
