import React from 'react';
import stop from './stop.jpg';
import './App.css';
//import LandingPage from './LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const divStyle = {
  fontSize: '40px',
  textAlign: 'center'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      
      <Router>
      <nav>
       <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/yes">Yes</Link>
        </li>
        <Switch>
          <Route path="/yes">
            <Yes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </nav>
      </Router>
    
  );
  }
}

function Home() {
  return (
    <div className="App">
        <header className="App-header">
          <img src={stop} className="App-logo" alt="logo" />
          <p>
            Do you think you are being evicted?
          </p>
          <Link to="/yes">Yes</Link>
          
        </header>
    </div>

    )
}

function Yes() {
  return (
  <nav style={divStyle}>
    <h1>
        Don't Panic 
    </h1>
  </nav>
  )
}




export default App;
