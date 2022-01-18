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
      disabled: false,
    };
  }

  componentDidMount() {
    const TEN = 10;
    setInterval(() => {
      const { checkAnswer, timerGlobal } = this.props;
      if (timerGlobal === 0) this.setState({ disabled: true });
      if (checkAnswer) this.checkQuestion();
    }, TEN);
    const { index } = this.props;
    this.checkQuestionBefore(index);
  }

  checkQuestion = () => {
    const { isCorrect } = this.props;
    this.setState({ disabled: true });

    if (isCorrect) {
      this.setState({ className: 'correct-answer' });
    } else {
      this.setState({
        className: 'wrong-answer',
      });
    }
  };

  checkQuestionBefore = (index) => {
    const UM_NEGATIVE = -1;
    let wrongNumber = Number(index) - 1;
    if (wrongNumber === UM_NEGATIVE) wrongNumber = 0;

    const { isCorrect } = this.props;
    if (isCorrect) {
      this.setState({ dataTest: 'correct-answer' });
    } else {
      this.setState({
        dataTest: `wrong-answer-${wrongNumber}`,
      });
    }
  };

  onClickAnswer = () => {
    const { checkQuestionProp } = this.props;
    checkQuestionProp();
  };

  render() {
    //
    const { answer } = this.props;
    const { className, dataTest, disabled } = this.state;
    return (
      <button
        data-testid={ dataTest }
        type="button"
        className={ `${className} bg-zinc-300 border
        border-zinc-400 p-6 w-full mb-5 hover:bg-sky-700` }
        onClick={ () => this.onClickAnswer() }
        disabled={ disabled }
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
  timerGlobal: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  checkAnswer: state.gameReducer.checking,
  timerGlobal: state.gameReducer.timerGlobal,
});

const mapDispatchToProps = (dispatch) => ({
  checkQuestionProp: () => dispatch(checkAnswerAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
