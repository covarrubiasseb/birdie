import React from 'React';
import axios from 'axios';
import { Outlet, Link } from "react-router-dom";
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import LoginRegister from './Components/LoginRegister';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    }

    this.setToken = this.setToken.bind(this);
  }

  setToken(data) {
    this.setState({
      token: data
    });
  }

  componentDidMount() {

    // Todo: Retrieve token from localstorage first

    // Todo: Check if login is in localstorage already
    axios.post("/api/auth/login", {
      data: {
        token: this.state.token
      }
    })
    .then(response => {

      console.log(response.data);

      if (response.data) {

        console.log("Is Logged In.");

        this.setState({
          token: response.data
        });

      } else {
      // User is Not Logged In
        // Set Flag to Render Login Page
        console.log("Is Not Logged In.");

        this.setState({
          token: null
        });

      }
    });

  }

  componentDidUpdate() {

    // Todo: go to dashboard on validated token

  }

  render() {

    return (
      <div className="App">
        
        {
          !this.state.token ? <LoginRegister setToken={this.setToken}/> : null
        }

        <header className="App-header">

          <Navbar>

            <Container fluid>

              <Nav>

                <Nav.Link>
                  <Link to="/main">Home</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/profile">Profile</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/notifications">Notifications</Link>
                </Nav.Link>

                <Nav.Link>
                  <Link to="/messages">Messages</Link>
                </Nav.Link>

                <input type="text" placeholder="Search Birdie" />

              </Nav>

            </Container>

          </Navbar>

        </header>

        <main>
          <Outlet />
        </main>

      </div>
    );
  }

}

export default App;
