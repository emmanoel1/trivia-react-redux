import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Answer from './Answer';
import { getQuestionsAct } from '../redux/actions';
import Timer from './Timer';

class Question extends Component {
  render() {
    const {
      props: {
        question: { category, question, shuffleAnswers, correctAnswer },
      },
    } = this;
    return (
      <div className="flex flex-col w-1/4">
        <div data-testid="question-category">{category}</div>
        <div data-testid="question-text">{question}</div>
        <div className="flex flex-col" data-testid="answer-options">
          {shuffleAnswers.map((answer, index) => (
            <Answer
              key={ index }
              index={ index }
              dataTest="correct-answer"
              isCorrect={ answer === correctAnswer }
              answer={ answer }
            />
          ))}
        </div>
        <div>
          <Timer />
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
    shuffleAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctAnswer: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = () => ({
  com: 'test',
});

const mapDispatchToProps = (dispatch) => ({
  getQuestionsProp: () => dispatch(getQuestionsAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
