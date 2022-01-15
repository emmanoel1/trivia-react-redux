import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import getGravatar from '../service/getGravatar';

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
    // const { email } = this.props;
    const email = 'fmateusturola@gmail.com';
    const hashEmail = md5(email).toString();
    const result = await getGravatar(hashEmail);
    this.setState({
      imgUrl: result.url,
    });
  }

  render() {
    const { imgUrl } = this.state;
    return (
      <header>
        <img data-testid="header-profile-picture" src={ imgUrl } alt="Player Profile" />
        <p data-testid="header-player-name">{}</p>
        <p data-testid="header-score">{}</p>
      </header>
    );
  }
}

// GameHeader.propTypes = {
//   email: PropTypes.string.isRequired,
// };

export default GameHeader;
