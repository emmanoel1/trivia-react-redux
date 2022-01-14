import React, { Component } from 'react';
import StartBtn from './StartBtn';

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
          <StartBtn isDisabled={ isDisabled } />
        </div>
      </div>
    );
  }
}

export default LoginForm;
