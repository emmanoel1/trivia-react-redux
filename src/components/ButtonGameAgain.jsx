import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGameAgain extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <button type="button" data-testid="btn-go-home" onClick={ () => history.push('/') }>
          Jogar Novamente
        </button>
      </div>
    );
  }
}

ButtonGameAgain.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ButtonGameAgain;
