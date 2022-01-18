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
    const THIRTY_SECOND = 32000;
    const teste = setInterval(() => {
      this.stopwatch();
      const { timer } = this.state;
      setTimer(timer);
    }, ONE_SECOND);
    setTimeout(() => clearTimeout(teste), THIRTY_SECOND);
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
});

const mapDispatchToProps = (dispatch) => ({
  setTimer: (payload) => dispatch(setTimerAct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

/*
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };
  }

  componentDidMount() {
    const ONE_SECOND = 1000;
    const THIRTY_SECOND = 31000;
    const teste = setInterval(() => this.stopwatch(), ONE_SECOND);
    setTimeout(() => clearTimeout(teste), THIRTY_SECOND);
  }

  stopwatch = () => this.setState((state) => ({ timer: state.timer - 1 }));

  render() {
    const { timer } = this.state;
    return <div>{timer}</div>;
  }
}

Timer.propTypes = {};

export default Timer;
 */
