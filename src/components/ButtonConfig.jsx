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
        className="`shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline
              focus:outline-none text-white font-bold py-2 px-4 rounded`"
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
