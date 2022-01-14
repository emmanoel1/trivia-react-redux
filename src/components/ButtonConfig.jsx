import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        className="bg-gray-300"
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
