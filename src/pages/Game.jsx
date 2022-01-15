import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question';
import GameHeader from '../components/GameHeader';
import { getItemLocalStore } from '../helpers';
import { getQuestionsAct, saveToken } from '../redux/actions';
// import PropTypes from 'prop-types';

class Game extends Component {
  constructor() {
    super();
    /*  this.state = {
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
      // errorToken: 0,
    }; */
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.getQuest();
  }

  getQuest = () => {
    console.log('funçao getQuest');
    const { getQuestions, saveTokenLocal } = this.props;

    const token = getItemLocalStore('token');
    console.log(token);
    saveTokenLocal(token);
  };

  render() {
    const { questions } = this.props;
    return (
      <div className="flex items-center flex-col">
        <GameHeader />
        {questions ? <Question question={ questions[0] } errorToken="0" /> : <p>Loading</p>}
        <button type="button">Next</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.gameReducer.question.results,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (token) => dispatch(getQuestionsAct(token)),
  saveTokenLocal: (token) => dispatch(saveToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
