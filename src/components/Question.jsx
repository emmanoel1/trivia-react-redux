import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Answer from './Answer';
import { getQuestionsAct, saveRank } from '../redux/actions';
import Timer from './Timer';

class Question extends Component {
  constructor() {
    super();
    this.state = { incorrectAnswers: [], correctAnswer: '', shuffleAnswers: [] };
  }

  componentDidMount() {
    const { question } = this.props;
    this.getQuest(question);
  }

  getQuest = (question) => {
    this.setState(
      {
        correctAnswer: question.correct_answer,
        incorrectAnswers: question.incorrect_answers,
      },
      () => this.randomAnswers(question.results),
    );
  };

  randomAnswers = () => {
    const { correctAnswer, incorrectAnswers } = this.state;
    console.log('RESPOSTA CORRETA:', correctAnswer);
    const answers = [...incorrectAnswers, correctAnswer];

    const shuffleAnswers = this.shuffle(answers);

    this.setState((state) => ({
      ...state,
      incorrectAnswers,
      correctAnswer,
      shuffleAnswers,
    }));
  };

  // função shuffle desenvolvida com a ajuda de https://qastack.com.br/programming/2450954/how-to-randomize-shuffle-a-javascript-array

  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  checkScore = (isCorrect) => {
    // 10 + (timer * dificuldade)
    const { question, timerGlobal, saveRankProp } = this.props;
    const correctPoints = 10;
    const sumScore = {
      easy: 1,
      medium: 2,
      hard: 3,
    };
    const TOTAL = isCorrect
      ? correctPoints + (timerGlobal * sumScore[question.difficulty]) : 0;
    saveRankProp(TOTAL);
  }

  render() {
    const {
      props: {
        question: { category, question },
      },
      state: { shuffleAnswers, correctAnswer },
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
              checkScore={ this.checkScore }
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
    category: PropTypes.string,
    correct_answer: PropTypes.string,
    difficulty: PropTypes.string,
    incorrect_answers: PropTypes.node,
    question: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  timerGlobal: PropTypes.number.isRequired,
  saveRankProp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  timerGlobal: state.gameReducer.timerGlobal,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestionsProp: () => dispatch(getQuestionsAct()),
  saveRankProp: (points) => dispatch(saveRank(points)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
