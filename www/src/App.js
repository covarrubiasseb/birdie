import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand">
          <div className="container-fluid">
          
          <ul className="navbar-nav">
            <li className="nav-item me-2">
              <a href="#">Home</a>
            </li>

            <li className="nav-item me-2">
              <a href="#">Profile</a>
            </li>

            <li className="nav-item me-2">
              <a href="#">Notifications</a>
            </li>

            <li className="nav-item me-2">
              <a href="#">Messages</a>
            </li>

            <li className="nav-item me-2">
              <input type="text" placeholder="Search Birdie" />
            </li>
          </ul>

          </div>
        </nav>
      </header>

      <main>
        
        <h1> Main Content</h1>

      </main>

    </div>
  );
}

export default App;
