import React from 'react';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <LoginForm history={ history } />
      </div>
    );
  }
}

export default Login;
