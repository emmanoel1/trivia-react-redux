import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonConfig from '../components/ButtonConfig';
import logo from '../trivia.png';
import StartBtn from '../components/StartBtn';

class HomeTemp extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
        </header>
        <ButtonConfig history={ history } />
        <StartBtn history={ history } />
      </div>
    );
  }
}

HomeTemp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default HomeTemp;
