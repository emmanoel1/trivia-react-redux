import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPlayer, getTokenAct } from '../redux/actions';
import { getItemLocalStore } from '../helpers';

class StartBtn extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.handlePlayBtn = this.handlePlayBtn.bind(this);
  }

  handlePlayBtn() {
    const { userDispatch, nameUser, emailUser, saveTokenLocal, history } = this.props;

    userDispatch({ name: nameUser, gravatarEmail: emailUser });

    saveTokenLocal(history.push('/game'));
  }

  render() {
    const { isDisabled } = this.props;
    return (
      // <Link to="/game">
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
      // </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDispatch: (token) => dispatch(getTokenAct(token)),
  saveTokenLocal: (callback) => dispatch(getTokenAct(callback)),
  userDispatch: (val) => dispatch(addPlayer(val)),
});

StartBtn.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  setDispatch: PropTypes.func.isRequired,
  saveTokenLocal: PropTypes.func.isRequired,
  userDispatch: PropTypes.func.isRequired,
  nameUser: PropTypes.string.isRequired,
  emailUser: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(StartBtn);
