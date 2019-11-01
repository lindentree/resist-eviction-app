import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Emergency from './Emergency';
import MyPdfViewer from './PDFviewer';
import './App.css';

//implement datePicker modal


class LandingPage extends React.Component {

  render() {
    return (
      <div className="Landing-page">
        
        <div>
          <MyPdfViewer filename="sum130.pdf"/> 
        </div>
        <div className="summary">
          Have you received a form that looks like this?
          If so, you are about to be evicted.
          Don't give up, there is still something you can do.
        </div>
      
       <Link to="/answer">Go Here</Link>

      </div>
    );
  }
}

export default LandingPage;