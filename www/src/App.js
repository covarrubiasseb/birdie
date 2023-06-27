import React from 'React';
import { Outlet, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand">
            <div className="container-fluid">
            
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <Link to="/main">Home</Link>
              </li>

              <li className="nav-item me-2">
                <Link to="/profile">Profile</Link>
              </li>

              <li className="nav-item me-2">
                <Link to="/notifications">Notifications</Link>
              </li>

              <li className="nav-item me-2">
                <Link to="/messages">Messages</Link>
              </li>

              <li className="nav-item me-2">
                <input type="text" placeholder="Search Birdie" />
              </li>
            </ul>

            </div>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

      </div>
    );
  }

}

export default App;
