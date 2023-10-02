import React from 'React';
import Modal from 'react-bootstrap/Modal';

class Register extends React.Component {

  render() {

    return (
    
      <Modal show={true}>
        <h1>Register</h1>

        <p>Already Registered? <a href="" onClick={this.props.setLogin}>Login!</a></p>

      </Modal>

    );

  } 

}

export default Register;