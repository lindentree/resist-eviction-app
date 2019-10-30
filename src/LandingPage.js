import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MyPdfViewer from './PDFviewer';
import './App.css';


//implement datePicker modal



class LandingPage extends React.Component {


  render() {
    return (
      <div>
        <div>
          <MyPdfViewer /> 
     
       </div>
       <div>
         Have you received a form that looks like this?
       </div>
      </div>
    );
  }
}

export default LandingPage;