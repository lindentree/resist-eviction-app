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
      <div>
        Have you received a form that looks like this?
        <div>
          <MyPdfViewer filename="sum130.pdf"/> 
        </div>
      
       <Link to="/answer">Go Here</Link>

      </div>
    );
  }
}

export default LandingPage;