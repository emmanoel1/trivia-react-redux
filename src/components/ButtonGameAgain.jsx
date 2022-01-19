import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startAgainAct } from '../redux/actions';

class ButtonGameAgain extends Component {
  handleClick = () => {
    const { history, startAgainProp } = this.props;
    startAgainProp();
    history.push('/');
  }

  render() {
    const { dataTestid } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid={ dataTestid }
          onClick={ () => this.handleClick() }
        >
          Play Again
        </button>
      </div>
    );
  }
}

ButtonGameAgain.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  startAgainProp: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({

  startAgainProp: () => dispatch(startAgainAct()),
});

export default connect(null, mapDispatchToProps)(ButtonGameAgain);
