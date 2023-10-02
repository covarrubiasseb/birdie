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
      isLoggedIn: false
    }
  }

  componentDidMount() {
    axios.get("/api/auth/login")
    .then( (response) => {
      if (response.data) {

        console.log("Is Logged In.");

        this.setState({
          isLoggedin: true
        });

      } else {
      // User is Not Logged In
        // Set Flag to Render Login Page
        console.log("Is Not Logged In.");

        this.setState({
          isLoggedIn: false
        });

      }
    });
  }

  render() {

    return (
      <div className="App">
        
        {
          !this.state.isLoggedin ? <LoginRegister /> : null
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
