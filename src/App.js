import React from 'react';
//import stop from './stop.jpg';
import './App.css';
import LandingPage from './LandingPage';
import Emergency from './Emergency';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// const divStyle = {
//   fontSize: '40px',
//   textAlign: 'center'
// };

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
        <Switch>
          <Route path="/yes" component={LandingPage}>
            
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        <Route path="/answer" component={Emergency}>
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
          <h1>Resist Eviction in California</h1>
          <Intro />
          <Link to="/yes">Learn More</Link>
          
        </header>
    </div>

    )

  function Intro() {
    return (
      <div class="contents">
      <div class="first-question">
        <div>Are you being evicted?</div>
        <div>You can fight it.</div>
        <div>Find help here.</div>
      </div>
    </div>


    )
    
  }
}





export default App;
