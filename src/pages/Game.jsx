import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import GameHeader from '../components/GameHeader';
import { getItemLocalStore } from '../helpers';
import { getQuestionsAct, getTokenAct, saveToken } from '../redux/actions';

class Game extends Component {
  componentDidMount() {
    this.getQuest();
  }

  verifyToken = () => {
    const { errorToken, tokenFromAPI } = this.props;
    if (errorToken !== 0) return tokenFromAPI();
  };

  getQuest = () => {
    const { saveTokenLocal, getQuestionsProp } = this.props;

    const token = getItemLocalStore('token');
    saveTokenLocal(token);
    getQuestionsProp(token);
  };

  render() {
    const { questions: quest } = this.props;
    return (
      <div className="flex items-center flex-col">
        <GameHeader />
        {quest ? <Question question={ quest[0] } errorToken="0" /> : <p>Loading</p>}
        <button type="button">Next</button>
      </div>
    );
  }
}

Game.propTypes = {
  questions: PropTypes.node.isRequired,
  saveTokenLocal: PropTypes.func.isRequired,
  getQuestionsProp: PropTypes.func.isRequired,
  tokenFromAPI: PropTypes.func.isRequired,
  errorToken: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  questions: state.gameReducer.question.results,
  errorToken: state.gameReducer.errorToken,
});

const mapDispatchToProps = (dispatch) => ({
  saveTokenLocal: (token) => dispatch(saveToken(token)),
  getQuestionsProp: (token) => dispatch(getQuestionsAct(token)),
  tokenFromAPI: (token) => dispatch(getTokenAct(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
