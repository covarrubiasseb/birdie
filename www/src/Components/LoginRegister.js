import React from 'React';

import Login from './Login';
import Register from './Register';

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: true
    }

    this.setLogin = this.setLogin.bind(this);
    this.setRegister = this.setRegister.bind(this);
  }

  setLogin(e) {
    e.preventDefault();
    this.setState({
      isRegistered: true
    });
  }

  setRegister(e) {
    e.preventDefault();
    this.setState({
      isRegistered: false
    });
  }

  render() {

    return (

      this.state.isRegistered ? <Login setRegister={this.setRegister} /> : <Register setLogin={this.setLogin}/> 

    );

  }
}

export default LoginRegister;