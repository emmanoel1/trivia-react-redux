import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonConfig from '../components/ButtonConfig';
import logo from '../trivia.png';
import Login from './Login';

class HomeTemp extends Component {
  render() {
    const { history } = this.props;
    return (
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <Login history={ history } />
        <Link to="/settings">
          <ButtonConfig history={ history } />
        </Link>
      </header>
    );
  }
}

HomeTemp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default HomeTemp;
