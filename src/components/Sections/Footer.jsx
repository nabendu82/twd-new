import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="mobile_footer darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoImg />
            </Link>
            <StyleP className="whiteColor font13">
              &#169; {getCurrentYear()} -{" "}
              <span className="orangeColor font13">TWD</span> All Right
              Reserved.
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              <BackToUp>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="back_to_top"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-arrow-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    fill="#0b093b"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                  />
                </svg>
              </BackToUp>
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const BackToUp = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #f2b300;
  padding: 16px;
  @media all and (max-width: 759px) {
    svg {
      margin-bottom: 10px;
    }
  }
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
