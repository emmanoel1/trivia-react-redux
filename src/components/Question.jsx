import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import { getItemLocalStore } from '../helpers';
import getQuestions from '../service/get';

class Question extends Component {
  constructor() {
    super();
    this.state = { incorrectAnswers: [], correctAnswer: '', shuffleAnswers: [] };
  }

  componentDidMount() {
    this.getQuest();
    setTimeout(() => {
      this.randomAnswers();
    }, 2000);
  }

  getQuest = () => {
    const token = getItemLocalStore('token');
    getQuestions(token.token).then((game) => this.setState({
      question: game.results[0],
      errorToken: game.response_code,
    }));
  };

  randomAnswers = () => {
    const {
      question: { correct_answer: correctAnswer, incorrect_answers: incorrectAnswers },
    } = this.state;

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

  render() {
    const {
      props: {
        question: { category, question },
      },
      state: { shuffleAnswers, correctAnswer },
    } = this;
    // console.log(this.state);
    // if (this.state) return null;
    return (
      <div>
        <div data-testid="question-category">{category}</div>
        <div data-testid="question-text">{question}</div>
        {shuffleAnswers.map((answer, index) => (
          <Answer
            key={ index }
            dataTest="correct-answer"
            isCorrect={ answer === correctAnswer }
            answer={ answer }
          />
        ))}
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
};

export default Question;
