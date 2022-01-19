import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { saveGravatar } from '../redux/actions';

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

  mountGravatar() {
    const { email, saveGravatar: save } = this.props;
    const hashEmail = md5(email).toString();
    const gravatarImg = `https://www.gravatar.com/avatar/${hashEmail}`;
    this.setState({
      imgUrl: gravatarImg,
    });
    save(gravatarImg);
  }

  render() {
    const { imgUrl } = this.state;
    const { name, score } = this.props;
    return (
      <header>
        <img data-testid="header-profile-picture" src={ imgUrl } alt="Player Profile" />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  saveGravatar: (val) => dispatch(saveGravatar(val)),
});

GameHeader.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  saveGravatar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameHeader);
