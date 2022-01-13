import React, { Component } from 'react';
import ButtonConfig from '../components/ButtonConfig';
import logo from '../trivia.png';

class HomeTemp extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        {/* <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
        </header> */}
        <ButtonConfig history={ history } />
      </div>
    );
  }
}

export default HomeTemp;
