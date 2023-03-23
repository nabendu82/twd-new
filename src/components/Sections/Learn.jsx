import React from "react";
import styled from "styled-components";
import "react-tooltip/dist/react-tooltip.css";
// Components
import ClientSlider from "../Elements/ClientSlider";
// import Calendar from "./Calendar";

//Assets
import Onlinecourse from "../../assets/img/online-course.png";
import Offlinecourse from "../../assets/img/offline-course.png";
import Physical_lodging from "../../assets/img/Phyical-lodging.png";
import Recorded_Premium from "../../assets/img/Recorded-Premium.png";
import Youtube from "../../assets/img/youtube.svg";
import Live_streaming from "../../assets/img/png-transparent-live-streaming-youtube-removebg-preview.png";
import pic01 from "../../assets/img/pic01.jpg";
import Table from "../Table";

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
          <h1 className="font40 extraBold sec_headings">LEARN</h1>
          <HeaderInfo>
            <div className="row">
              <div className="block_1 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <img className="learn_image" src={pic01} alt="learn_pic" />
                <br />
                <p className="font13 learn_content">
                  Web-development is one of the highly paid job and fulfilling
                  career in the world. With the rise of the startup ecosystem,
                  anyone can be a developer. You don't need to be from a
                  computer science background.
                  <br />
                  <br />
                  But people from non-computer background or people stuck in
                  other non-coding jobs find it difficult to get into web-app
                  development. There is a information overload, where people get
                  confused on what technologies to learn and how to get inside.
                  I have created a course specially designed for Production
                  Support, Testing or even non-computer background to get into
                  development. Learn more about all courses{" "}
                  <a
                    href="https://school.twd.codes/"
                    target="_blank"
                    className="learn_school_link"
                    rel="noreferrer"
                  >
                    here
                  </a>{" "}
                  🚀
                </p>
              </div>
              <div className="block_2 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="utube">
                  <img className="utube_heading" src={Youtube} alt="youtube" />
                  <span className="span_sch">SCHEDULE</span>
                  <img
                    className="live"
                    src={Live_streaming}
                    alt="live_stream"
                  />
                </div>
                {/* <Calendar /> */}
                <Table />
              </div>
            </div>
          </HeaderInfo>
        </div>

        <div className="learn_sec lightBg">
          <h1 className="font60 full_stack_heading">FULL STACK DEVELOPMENT</h1>
          <div className="cards_sec">
            <div className="row">
              <div className="card col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">
                  FULL STACK WEB DEVELOPMENT BOOTCAMP
                </h1>
                <b>
                  <b className="duration">Duration:</b> 3 months
                </b>
                <b>
                  <b className="duration">Fee:</b> 9000/-
                </b>
                <img className="batch2" src={Onlinecourse} alt="online" />
                <a
                  href="https://docs.google.com/document/d/1hyA_Nu8vy7zCToy5LerTWoX_lacWQD5X6Tcs0JMe4qE/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="card2 col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">HTML-CSS ONLINE BOOTCAMP</h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 4000/-
                </b>
                <img className="batch2" src={Offlinecourse} alt="offline" />
                <a
                  href="https://docs.google.com/document/d/1UMIjI8qxIg2xzKmvUNGIJXSylgfxTyujbxsSook0Bfg/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn1 animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="card3 col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">
                  JAVASCRIPT-REACT ONLINE BOOTCAMP
                </h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 4000/-
                </b>
                <img className="batch3" src={Physical_lodging} alt="css" />
                <a
                  href="https://docs.google.com/document/d/1UZs2O0mejUxr2CTasrN7ZEVclDDiZj4UfLwl1LWQOws/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn1 animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
              <div className="card4 col-xs-12 col-sm-3 col-md-3 col-lg-3 ">
                <h1 className="card_heading">ADVANCE REACT-NODE-NEXTJS</h1>
                <b>
                  <b className="duration">Duration:</b> 1 month
                </b>
                <b>
                  <b className="duration">Fee:</b> 4000/-
                </b>
                <img className="batch2" src={Recorded_Premium} alt="css" />
                <a
                  href="https://docs.google.com/document/d/1__EKGfOYHONQtcfk1r8Zp_qJAytc3wUdavvZKPGOtEU/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="enroll_btn1 animate pointer radius8">
                    Learn more
                  </button>
                </a>
              </div>
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
  display: flex;
  justify-content: center;
  // text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
