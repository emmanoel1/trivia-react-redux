import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import GameHeader from '../components/GameHeader';
import {
  getQuestionsAct,
  getTokenAct,
  saveToken,
  startAnswerAct,
} from '../redux/actions';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      numberQuest: 0,
    };
  }

  nextQuestion = (nq) => {
    const { history } = this.props;
    const NUMBER_QUESTION = 4;
    if (nq < NUMBER_QUESTION) {
      this.setState((state) => ({ numberQuest: state.numberQuest + 1 }));
    } else {
      history.push('/feedback');
    }
    const { startAnswerActProp } = this.props;
    startAnswerActProp();
  };

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

  randomAnswers = (quest) => {
    const {
      category,
      type,
      difficulty,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = quest;

    const answers = [...incorrectAnswers, correctAnswer];

    const shuffleAnswers = this.shuffle(answers);

    return {
      category,
      question,
      type,
      difficulty,
      incorrectAnswers,
      correctAnswer,
      shuffleAnswers,
    };
  };

  render() {
    const { questions: quest, errorToken, nextQuestion } = this.props;
    const { numberQuest } = this.state;
    return (
      <div className="flex items-center flex-col">
        <GameHeader />
        {quest ? (
          <Question
            question={ this.randomAnswers(quest[numberQuest]) }
            errorToken={ errorToken }
            numberQuest={ numberQuest }
          />
        ) : (
          <p>Loading</p>
        )}
        {nextQuestion && (
          <button
            type="button"
            onClick={ () => this.nextQuestion(numberQuest) }
            data-testid="btn-next"
          >
            Next
          </button>
        )}
      </div>
    );
  }
}

Game.propTypes = {
  questions: PropTypes.node.isRequired,
  errorToken: PropTypes.number.isRequired,
  nextQuestion: PropTypes.bool.isRequired,
  startAnswerActProp: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.gameReducer.question.results,
  errorToken: state.gameReducer.errorToken,
  nextQuestion: state.gameReducer.nextQuestion,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  saveTokenLocal: (token) => dispatch(saveToken(token)),
  getQuestionsProp: (token) => dispatch(getQuestionsAct(token)),
  tokenFromAPI: (token) => dispatch(getTokenAct(token)),
  startAnswerActProp: () => dispatch(startAnswerAct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
