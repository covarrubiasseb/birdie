import React from 'React';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

import './LoginRegister.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setUsername(e) {
    e.preventDefault();

    this.setState({
      username: e.target.value
    });
  }

  setPassword(e) {
    e.preventDefault();

    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    // Send a POST request to /api/auth/login
    axios.post("/api/auth/login", {
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then(response => {

      if (response.data) {
        this.props.setIsLoggedIn();
      }

      // Clear forms on submission
      this.setState({
        username: "",
        password: ""
      });

      // Todo: show user invalid login on invalid response from server

    });

  }

  render() {

    return (
    
      <Modal show={true}>

        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form className="container" onSubmit={e => this.handleSubmit(e) }>
            <label className="row login-form-row">
              <p>Username</p>
              <input type="text" onChange={e => this.setUsername(e)} value={this.state.username}/>
            </label>
            <label className="row login-form-row">
              <p>Password</p>
              <input type="password" onChange={e => this.setPassword(e)} value={this.state.password}/>
            </label>
            <div className="row login-form-row login-form-submit">
              <button type="submit">Submit</button>
            </div>
          </form>

          <p>Not Registered? <a href="" onClick={this.props.setRegister}>Sign up!</a></p>
        </div>

      </Modal>

    );

  } 

}

export default Login;