import React, { Component } from 'react';
import Question from '../components/Question';
import { getItemLocalStore } from '../helpers/index';
import getQuestions from '../service/get';
// import PropTypes from 'prop-types';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      questions: [
        {
          category: 'categoria',
          correct_answer: 'resposta correta',
          difficulty: 'dificuldade',
          incorrect_answers: ['op1', 'op2', 'op3'],
          question: 'descrição',
          type: 'tipo',
        },
      ],
      errorToken: 0,
    };
  }

  componentDidMount() {
    this.getQuest();
  }

  getQuest = () => {
    const token = getItemLocalStore('token');
    getQuestions(token.token).then((game) => this.setState({
      questions: game.results,
      errorToken: game.response_code,
    }));
  };

  render() {
    const { questions, errorToken } = this.state;
    if (questions === []) {
      return <p>carregando</p>;
    }
    return (
      <div className="flex items-center flex-col">
        <Question question={ questions[0] } errorToken={ errorToken } />
        <button type="button">Next</button>
      </div>
    );
  }
}

// Game.propTypes = {

// };

export default Game;
