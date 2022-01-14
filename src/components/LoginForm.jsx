import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      playerName: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkInput = this.checkInput.bind(this);
  }

  handleChange(event) {
    const { value, id } = event.target;
    this.setState({ [id]: value }, () => this.checkInput());
  }

  checkInput() {
    const { email, playerName } = this.state;
    if (email !== '' && playerName !== '') {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  render() {
    const { email, playerName, isDisabled } = this.state;

    return (
      <div className="rounded px-8 pt-6 pb-8 mt-16 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="text-base block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email do Gravatar:
            <input
              className="text-black shadow appearance-none border rounded w-full py-2
              px-3 text-grey-darker"
              id="email"
              type="text"
              placeholder="user@email.com"
              data-testid="input-gravatar-email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            className="text-base block text-grey-darker text-sm font-bold mb-2"
            htmlFor="playerName"
          >
            Nome do Jogador:
            <input
              className="text-black shadow appearance-none border border-red rounded
             w-full py-2 px-3 text-grey-darker mb-3"
              id="playerName"
              type="text"
              placeholder="Username"
              data-testid="input-player-name"
              value={ playerName }
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/game">
            <button
              className={
                isDisabled
                  ? `shadow bg-purple-300 cursor-not-allowed hover:bg-purple-400
            focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4
            rounded`
                  : `shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline
              focus:outline-none text-white font-bold py-2 px-4 rounded`
              }
              type="button"
              data-testid="btn-play"
              disabled={ isDisabled }
            >
              PLAY
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;
