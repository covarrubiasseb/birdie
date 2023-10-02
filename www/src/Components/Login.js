import React from 'React';

class Login extends React.Component {

  render() {

    return (
    
      <div>
        <h1>Login</h1>

        <p>Not Registered? <a href="" onClick={this.props.setRegister}>Sign up!</a></p>

      </div>

    );

  } 

}

export default Login;