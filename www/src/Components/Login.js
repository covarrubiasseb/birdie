import React from 'React';
import Modal from 'react-bootstrap/Modal';

class Login extends React.Component {

  render() {

    return (
    
      <Modal show={true}>
        <h1>Login</h1>

        <p>Not Registered? <a href="" onClick={this.props.setRegister}>Sign up!</a></p>

      </Modal>

    );

  } 

}

export default Login;