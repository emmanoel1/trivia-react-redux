import React from 'react';
import PropTypes from 'prop-types';
// import get from '../service/get';
import getToken from '../service/getToken';

class StartBtn extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handlePlayBtn = this.handlePlayBtn.bind(this);
  }

  async handlePlayBtn() {
    const { history } = this.props;
    const token = await getToken();
    localStorage.setItem('token', JSON.stringify(token));
    history.push('/game');
  }

  render() {
    return (
      <button data-testid="btn-play" type="button" onClick={ () => this.handlePlayBtn() }>
        Play
      </button>
    );
  }
}

StartBtn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default StartBtn;
