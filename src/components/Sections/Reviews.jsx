import React from "react";
import styled from "styled-components";

export default function Reviews() {
  return (
    <Wrapper id="reviews">
      <div className="lightBg">
        {/* <h1 className="font60 full_stack_heading">REVIEWS</h1> */}
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold sec_headings">REVIEWS</h1>
            <img
              className="review_image"
              src="https://twd.codes/static/transition-main-0c7101110e6e4161af8f3a0a397ebc64.png"
              alt="review_pic"
            />
            <h2 className="review_heading">MYHASHCODE REVIEW</h2>
            <p className="font13 review_content">
              I have taught JavaScript and ReactJS to around 70 students in a
              edtech startup MyHashCode in the Month of June and July, 2021 and
              really happy to see all of them created awesome Reactjs projects
              and learnt a lot from it.
              <br />
              <br />
              Most of these students knew basic HTML, CSS and JavaScript when
              came for the #internship and i taught them Advanced JavaScript and
              ReactJS.
              <br />
              <br />
              It feels so great to get positive feedback from them and knowing
              that they have learnt from me. Below is the LinkedIn link for the
              reviews.
            </p>
            <img
              className="review_pics"
              src="https://twd.codes/static/myHashCode-d751c3279d28063692ad115e9a33f1fa.png"
              alt="review_01"
            />
            <br />
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:6835641954345226240"
              target="_blank"
              rel="noreferrer"
            >
              <button className="myhash_btn animate pointer radius8">
                MyHashCode Review
              </button>
            </a>
            <hr className="horizontal_line" />
            <br />
            <h2 className="review_heading">TRUSTPILOT REVIEWS</h2>
            <p className="font-13 review_content">
              Got some awesome reviews for my course{" "}
              <a
                className="webdev_anchor"
                href="https://school.twd.codes/"
                target="_blank"
                rel="noreferrer"
              >
                Web-dev Transition System
              </a>{" "}
              on TrustPilot.
            </p>
            <br />
            <img
              className="review_pics"
              src="https://twd.codes/static/trustpilotreview1-73cb09a90b2d62e39a1a1f1528b9d6cc.png"
              alt="review_pic_02"
            />
            <img
              className="review_pics"
              src="https://twd.codes/static/trustpilotreview2-2e832be2b2f95c45e4666aa7657a1157.png"
              alt="review_pic_02"
            />
            <br />
            <a
              href="https://www.trustpilot.com/review/twd.codes"
              target="_blank"
              rel="noreferrer"
            >
              <button className="myhash_btn animate pointer radius8">
                Trustpilot Review
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
  // padding: 70px 0 30px 0;
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
