import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";

//Assets
import Onlinecourse from "../../assets/img/online-course.png";
import Offlinecourse from "../../assets/img/offline-course.png";
import Physical_lodging from "../../assets/img/Phyical-lodging.png";

export default function Learn() {
  return (
    <Wrapper id="learn">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        {/* <h1 className="font60 full_stack_heading">LEARN</h1> */}

        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold sec_headings">LEARN</h1>

            <img
              className="learn_image"
              src="https://twd.codes/static/pic01-3bb03bd268de361257554aa315888e2f.jpg"
              alt="learn_pic"
            />
            <p className="font13 learn_content">
              Web-development is one of the highly paid job and fulfilling
              career in the world. With the rise of the startup ecosystem,
              anyone can be a developer. You don't need to be from a computer
              science background.
              <br />
              <br />
              But people from non-computer background or people stuck in other
              non-coding jobs find it difficult to get into web-app development.
              There is a information overload, where people get confused on what
              technologies to learn and how to get inside. I have created a
              course specially designed for Production Support, Testing or even
              non-computer background to get into development. Learn more about
              all courses{" "}
              <a
                href="https://school.twd.codes/"
                target="_blank"
                className="learn_school_link"
                rel="noreferrer"
              >
                here.
              </a>
            </p>
          </HeaderInfo>
        </div>

        <div className="learn_sec lightBg">
          <h1 className="font60 full_stack_heading">FULL STACK DEVELOPMENT</h1>
          <div className="cards_sec">
            <div className="card col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <h1 className="card_heading">ONLINE BATCH</h1>
              <img className="batch" src={Onlinecourse} alt="online" />
              <a
                href="https://imojo.in/QhaBRd"
                target="_blank"
                rel="noreferrer"
              >
                <button className="enroll_btn animate pointer radius8">
                  Enroll Now
                </button>
              </a>
            </div>
            <div className="card col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <h1 className="card_heading">PHYSICAL BATCH</h1>
              <img className="batch" src={Offlinecourse} alt="offline" />
              <a
                href="https://imojo.in/QhaBR2"
                target="_blank"
                rel="noreferrer"
              >
                <button className="enroll_btn animate pointer radius8">
                  Enroll Now
                </button>
              </a>
            </div>
            <div className="card col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <h1 className="card_heading">PHYSICAL BATCH - LODGING</h1>
              <img className="batch" src={Physical_lodging} alt="css" />
              <a
                href="https://imojo.in/QhaBR3"
                target="_blank"
                rel="noreferrer"
              >
                <button className="enroll_btn animate pointer radius8">
                  Enroll Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
