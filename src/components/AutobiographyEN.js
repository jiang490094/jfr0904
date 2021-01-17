import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MyNavbar from "./common/MyNavbar";
import MyFooter from "./common/MyFooter";
import TalkBox from "./common/TalkBox";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function AutobiographyEN(props) {
  return (
    <>
      <div className="WebBack">
        <MyNavbar />
        <main>
          <div className="container ">
            <div className="row">
              <div className="NavMargin"></div>
              <div className="AboutMySelf">
                <div className="MyDescriptionR">
                  <div className="MyName">
                    <div className="CNName">自傳Autobiography </div>
                  </div>

                  <div className="Intro Intro2 Intro3">
                    Graduated from MFEE09 in III and leader of my team.
                    <br />
                    Learned front end engineering for 582 hours.
                    <br />
                    lowered CPA of ADs by 50% in 3 month as a freshman marketing
                    specialist.
                    <br />
                    Awarded in Youth Innovative Design Festival while in
                    college. <br />
                    Code can do everything, I can do anything.
                    <br />
                    <div className="NavMargin"></div>
                    Judgment and Execution
                    <br />
                    As a leader of the group in the project, I know how to
                    arrange work properly and co-work with my colleague. I also
                    wrote a guide of Redux for my team to keep everyone up.
                    <br />
                    <div className="NavMargin"></div>
                    Time Management
                    <br />
                    Not only follow up the path of the class,but also face the
                    challenge of final project. While
                    designing,communicating,coding,reviewing,paper writing ,even
                    powerpoint designing are need to be completed in a certain
                    time,how to manage time wisely had became a vital issue .
                    <br />
                    <div className="NavMargin"></div>
                    Stress Resistance From Marketing specialist to front - end
                    engineer is a very different challenge. 5 days before the
                    final presentation,my hard disk broke. i had to to fix my
                    computer and redo a lot of work. I learned that backup from
                    time to time to Github is important
                    <br />
                    <br />
                    I have the considerate of designer; the Observation of
                    marketing specialist and the logic of front - end engineer I
                    believe in no pain ,no gain.
                    <br />I learned all the skills about front - end in 5 month.
                    From CSS,JavaScript to React.js,I am able to finish a front
                    - end website independently as a junior engineer now.
                  </div>

                  <div className="AboutBTN">
                    <Button
                      className="AboutBTN1"
                      variant="outline-warning"
                      onClick={() => {
                        props.history.push("/jfr0904/Resume");
                      }}
                    >
                      上一頁
                    </Button>{" "}
                    
                    <Button
                      className="AboutBTN1"
                      variant="outline-warning"
                      onClick={() => {
                        props.history.push("/jfr0904/Contact");
                      }}
                    >
                      聯繫我
                    </Button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <MyFooter />
      </div>
    </>
  );
}

export default withRouter(AutobiographyEN);
