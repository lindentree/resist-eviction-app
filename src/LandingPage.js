import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Emergency from "./Emergency";
import MyPdfViewer from "./PDFviewer";
import "./App.css";

//implement datePicker modal

class LandingPage extends React.Component {
  render() {
    return (
      <div className="Landing-page">
        <div className="row ">
          {/* <div className="col-lg-6 col-sm-12 col-12">
            <div>
              <MyPdfViewer filename="sum130.pdf" />
            </div>
          </div> */}
          <div className="col-lg-6 col-sm-6 col-12 offset-lg-3 offset-sm-3">
            <h4>Have you received a form that looks like this?</h4>
            <img src="sum_130.png" className="pdf-image" />
            <p>
              If so, you are about to be evicted.
              <br />
              Don't give up, there is still something you can do.
            </p>
            <button type="button" className="btn btn-info">
              <Link className="link" to="/answer">
                Go Here
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
