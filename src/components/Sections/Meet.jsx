import React from "react";
import styled from "styled-components";

//assets
import pic04 from "../../assets/img/pic04.jpg";
import right_mark from "../../assets/img/right_mark.png";

export default function Meet() {
  return (
    <Wrapper id="meet">
      <div className="whiteBg">
        {/* <h1 className="font60 full_stack_heading">MEET</h1> */}

        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold sec_headings">MEET</h1>
            <img src={pic04} alt="meet_image" className="meet_image" />
            <p className="font13 meet_content">
              I do weekly live Web-development workshop, in which i will tell
              the 3 Secrets to get into development. Beside this will also teach
              the basics to step into web-development.
              <br />
              <br />
              <ul className="meet_list">
                <li>
                  <img className="right_mark" src={right_mark} alt="right" />
                  <b>HTML Basics</b>
                </li>
                <li>
                  <img className="right_mark" src={right_mark} alt="right" />
                  <b>CSS Basics</b>
                </li>
                <li>
                  <img className="right_mark" src={right_mark} alt="right" />
                  <b>JavaScript Basics</b>
                </li>
              </ul>
              <br />
              Whether you work in Sales, Production support, testing or are a
              student, you can be a web-developer. It seems hard, but i will
              tell you a 6 month process to become a web-app developer and get
              that dream job.
            </p>
            <a
              href="https://us06web.zoom.us/meeting/register/tZckc-mpqz4qGtxvOu7VxhDDRZyjYkS_WkUu"
              target="_blank"
              rel="noreferrer"
            >
              <button className="myhash_btn animate pointer radius8">
                Register Here
              </button>
            </a>
          </HeaderInfo>
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
