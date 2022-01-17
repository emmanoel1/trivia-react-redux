import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class GameHeader extends Component {
  constructor() {
    super();
    this.state = {
      imgUrl: '',
    };
  }

  componentDidMount() {
    this.mountGravatar();
  }

  async mountGravatar() {
    const { email } = this.props;
    const hashEmail = md5(email).toString();
    this.setState({
      imgUrl: `https://www.gravatar.com/avatar/${hashEmail}`,
    });
  }

  render() {
    const { imgUrl } = this.state;
    const { name, score } = this.props;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ imgUrl }
          alt="Player Profile"
        />
        <p data-testid="header-player-name">
          {name}
        </p>
        <p data-testid="header-score">
          {score}
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.userInfo.email,
  name: state.userInfo.name,
  score: state.score,
});

GameHeader.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(GameHeader);
