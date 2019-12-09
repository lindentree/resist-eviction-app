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
import Disclaimer from './Disclaimer';

class Emergency extends React.Component {

  render() {
    return (
      <div className="Emergency-page">
          <MyPdfViewer filename="ud105.pdf"/> 
        <div className="summary">
          You have FIVE court days from the date you received the previous form from your landlord to file this at your nearest courthouse
        </div>
          <p>
            You should find a lawyer to help you fill it out; however, if you're about to miss the deadline, file it with your name, your address, and the court address.
          </p>
          <p>
            This will buy you another TEN days to amend this answer form and file again properly.
          </p>
          <p>
            Filing this will cost money, although you should ask the courthouse clerk for a fee waiver form.
          </p>
           <Disclaimer />
      </div>

    );
  }
}

export default Emergency;