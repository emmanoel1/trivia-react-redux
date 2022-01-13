import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ButtonConfig extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    return (
      <button
        type="button"
        data-testid="btn-settings"
        className="bg-sky-900 w-96"
        onClick={ this.handleClick }
      >
        <i className="fas fa-cogs" />
      </button>
    );
  }
}

ButtonConfig.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ButtonConfig;
