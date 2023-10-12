import React from 'React';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

import './LoginRegister.css';

class Register extends React.Component {
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

    // Send a POST request to /api/auth/register
    axios.post("/api/auth/register", {
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then(response => {

      // Clear forms on submission
      this.setState({
        username: "",
        password: ""
      });

      // Todo: use this.props.setToken to set Token to newly retrieved token

      // Todo: show user invalid register on invalid response from server


    });

  }

  render() {

    return (
    
      <Modal show={true}>

        <div className="register-wrapper">
          <h1>Please Register</h1>
          <form className="container" onSubmit={e => this.handleSubmit(e) }>
            <label className="row register-form-row">
              <p>Username</p>
              <input type="text" onChange={e => this.setUsername(e)} value={this.state.username}/>
            </label>
            <label className="row register-form-row">
              <p>Password</p>
              <input type="password" onChange={e => this.setPassword(e)} value={this.state.password}/>
            </label>
            <div className="row register-form-row register-form-submit">
              <button type="submit">Submit</button>
            </div>
          </form>

          <p>Already Registered? <a href="" onClick={this.props.setLogin}>Login!</a></p>
        </div>

      </Modal>

    );

  } 

}

export default Register;