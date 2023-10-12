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

    this.setIsLoggedIn = this.setIsLoggedIn.bind(this);
  }

  setIsLoggedIn() {
    this.setState({
      isLoggedIn: true
    });
  }

  componentDidMount() {

    axios.post("/api/auth/login")
    .then(response => {

      if (response.data) {

        this.setIsLoggedIn();

      }

    });

  }

  componentDidUpdate() {

    if (this.state.isLoggedIn) {

      // Todo: redirect to /main

    }

  }

  render() {

    return (
      <div className="App">
        
        {
          !this.state.isLoggedIn ? <LoginRegister setIsLoggedIn={this.setIsLoggedIn}/> : null
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
