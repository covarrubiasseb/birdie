import React from 'React';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

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

      console.log(response.data);

      // Clear forms on submission
      this.setState({
        username: "",
        password: ""
      });

      // Todo: use this.props.setToken to set Token to newly retrieved token

      // Todo: show user invalid login on invalid response from server

    });

  }

  render() {

    return (
    
      <Modal show={true}>

        <div className="login-wrapper">
          <h1>Please Log In</h1>
          <form onSubmit={e => this.handleSubmit(e) }>
            <label>
              <p>Username</p>
              <input type="text" onChange={e => this.setUsername(e)} value={this.state.username}/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => this.setPassword(e)} value={this.state.password}/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <p>Not Registered? <a href="" onClick={this.props.setRegister}>Sign up!</a></p>

      </Modal>

    );

  } 

}

export default Login;