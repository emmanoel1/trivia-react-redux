import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTimerAct } from '../redux/actions';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 31,
    };
  }

  componentDidMount() {
    const { setTimer } = this.props;
    const ONE_SECOND = 1000;
    const THIRTY_SECOND = 31000;
    const timerDegree = setInterval(() => {
      this.stopwatch();
      const { timer } = this.state;
      setTimer(timer);
    }, ONE_SECOND);
    /*  setInterval(() => {
      const { startCounter } = this.state;
      if (!startCounter) clearTimeout(timerDegree);
    }, 500); */
    setTimeout(() => clearTimeout(timerDegree), THIRTY_SECOND);
  }

  stopwatch = () => this.setState((state) => ({ timer: state.timer - 1 }));

  render() {
    const { timerGlobal } = this.props;
    return <div>{timerGlobal}</div>;
  }
}

Timer.propTypes = {
  timerGlobal: PropTypes.number.isRequired,
  setTimer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  timerGlobal: state.gameReducer.timerGlobal,
  startCounter: state.gameReducer.startCounter,
});

const mapDispatchToProps = (dispatch) => ({
  setTimer: (payload) => dispatch(setTimerAct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
