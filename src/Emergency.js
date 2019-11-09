import React from "react";
import "./App.css";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MyPdfViewer from "./PDFviewer";
import Disclaimer from "./Disclaimer";

class Emergency extends React.Component {
  render() {
    return (
      <div className="Emergency-page">
        <div className="row ">
          <div className="col-lg-8 col-sm-8 col-12 offset-lg-2 offset-sm-2">
            <h5>
              You have <b>FIVE</b> court days from the date you received the
              previous form (SUM 130) from your landlord to file this form (UD
              105) at your nearest courthose.
            </h5>
            <br />
            <img src="ud_105.png" className="pdf-image" />
            <p className="p-padding">
              You should find a lawyer to help you fill it out; however, if
              you're about to MISS THE DEADLINE, file it with just your{" "}
              <b>NAME</b>, your <b>ADDRESS</b>, and the <b>COURT ADDRESS</b>.{" "}
              <br />
              <br />
              This will buy you another <b>TEN</b> days to amend this answer
              form and file again properly. <br />
              <br />
              Filing this will cost money, although you should ask the
              courthouse clerk for a fee waiver form.
              <br />
              <br />
              <button type="button" className="btn btn-info">
                <a
                  className="link"
                  href="https://www.courts.ca.gov/documents/ud105.pdf"
                  target="_blank"
                >
                  Download UD 105
                </a>
              </button>
            </p>

            <Disclaimer />
          </div>
        </div>
        {/* <MyPdfViewer filename="ud105.pdf"/>  */}
      </div>
    );
  }
}

export default Emergency;
