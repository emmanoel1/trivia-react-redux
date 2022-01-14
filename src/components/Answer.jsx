import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Answer extends Component {
  render() {
    const { answer } = this.props;
    return (
      <div>
        <button type="button" className="bg-2">
          {answer}
        </button>
      </div>
    );
  }
}

Answer.propTypes = {};

export default Answer;
