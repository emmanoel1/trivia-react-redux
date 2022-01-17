import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import GameHeader from '../components/GameHeader';
import { getQuestionsAct, getTokenAct, saveToken } from '../redux/actions';

class Game extends Component {
/*   async componentDidMount() {
    // this.getQuest();
    const { getQuestionsProp, token, tokenFromAPI, saveTokenLocal } = this.props;

     await getQuestionsProp(token);
  } */

  getQuest = async () => {};

  render() {
    const { questions: quest, errorToken } = this.props;
    return (
      <div className="flex items-center flex-col">
        <GameHeader />
        {quest ? (
          <Question question={ quest[0] } errorToken={ errorToken } />
        ) : (
          <p>Loading</p>
        )}
        <button type="button">Next</button>
      </div>
    );
  }
}

Game.propTypes = {
  questions: PropTypes.node.isRequired,
  errorToken: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.gameReducer.question.results,
  errorToken: state.gameReducer.errorToken,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  saveTokenLocal: (token) => dispatch(saveToken(token)),
  getQuestionsProp: (token) => dispatch(getQuestionsAct(token)),
  tokenFromAPI: (token) => dispatch(getTokenAct(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
