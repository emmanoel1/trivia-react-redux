import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Answer extends Component {
  render() {
    const { answer } = this.props;
    return (
      <button
        type="button"
        className="bg-zinc-300 border border-zinc-400 p-6 w-full mb-5 hover:bg-sky-700"
      >
        {answer}
      </button>
    );
  }
}

Answer.propTypes = {};

export default Answer;
