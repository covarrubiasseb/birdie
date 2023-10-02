import React from 'React';

class Register extends React.Component {

  render() {

    return (
    
      <div>
        <h1>Register</h1>

        <p>Already Registered? <a href="" onClick={this.props.setLogin}>Login!</a></p>

      </div>

    );

  } 

}

export default Register;