import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuestionsAct, getTokenAct, saveToken } from '../redux/actions';
import { getItemLocalStore } from '../helpers';

class StartBtn extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handlePlayBtn = this.handlePlayBtn.bind(this);
  }

  handlePlayBtn() {
    const tokenLocal = getItemLocalStore('token');
    if (!tokenLocal) {
      const { setDispatch } = this.props;
      setDispatch();
    }

    const { saveTokenLocal, getQuestionsProp } = this.props;
    console.log(tokenLocal);
    saveTokenLocal(tokenLocal);
    getQuestionsProp(tokenLocal);
  }

  render() {
    const { isDisabled } = this.props;
    return (
      <Link to="/game">
        <button
          className={
            isDisabled
              ? `shadow bg-purple-300 cursor-not-allowed hover:bg-purple-400
              focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4
              rounded`
              : `shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline
              focus:outline-none text-white font-bold py-2 px-4 rounded`
          }
          onClick={ () => this.handlePlayBtn() }
          type="button"
          data-testid="btn-play"
          disabled={ isDisabled }
        >
          PLAY
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDispatch: (token) => dispatch(getTokenAct(token)),
  saveTokenLocal: (token) => dispatch(saveToken(token)),
  getQuestionsProp: (token) => dispatch(getQuestionsAct(token)),
});

StartBtn.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  setDispatch: PropTypes.func.isRequired,
  saveTokenLocal: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(StartBtn);
