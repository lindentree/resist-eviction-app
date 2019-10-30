import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MyPdfViewer from './PDFviewer';

class Emergency extends React.Component {

  render() {
    return (
      <div>
        <div>
          <MyPdfViewer filename="ud105.pdf"/> 
        </div>
        <div>
          You only have FIVE court days from the date you received the previous form from your landlord to respond with this form
        </div>
      </div>
    );
  }
}

export default Emergency;