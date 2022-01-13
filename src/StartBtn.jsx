import React from 'react';
// import get from './service/get';
// import PropTypes from 'prop-types';
import getToken from './service/getToken';

class StartBtn extends React.Component {
  constructor() {
    super();

    this.state = {

    };

    this.handlePlayBtn = this.handlePlayBtn.bind(this);
  }

  async handlePlayBtn() {
    const token = await getToken();
    console.log(token);
    // const game = await get(token.token);
    // console.log(game);
    localStorage.setItem('token', JSON.stringify(token));
    // history.push('/game');
  }

  render() {
    return (

      <button
        data-testid="btn-play"
        type="button"
        onClick={ () => this.handlePlayBtn() }
      >
        Play
      </button>
    );
  }
}

// StartBtn.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired,
//   }).isRequired,
// };

export default StartBtn;
