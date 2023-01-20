import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate greyBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          {/* <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            TWD
          </h1> */}
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="mini mini_nav"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            HOME
          </Link>
        </li>
        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="mini mini_nav"
            style={{ padding: "10px 15px" }}
            to="learn"
            spy={true}
            smooth={true}
            offset={-60}
          >
            LEARN
          </Link>
        </li>
        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="mini mini_nav"
            style={{ padding: "10px 15px" }}
            to="meet"
            spy={true}
            smooth={true}
            offset={-60}
          >
            MEET
          </Link>
        </li>
        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="mini mini_nav"
            style={{ padding: "10px 15px" }}
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
          >
            ABOUT
          </Link>
        </li>
        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="mini mini_nav"
            style={{ padding: "10px 15px" }}
            to="connect"
            spy={true}
            smooth={true}
            offset={-60}
          >
            CONNECT
          </Link>
        </li>
        <li className="semiBold font18 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="mini mini_nav"
            style={{ padding: "10px 15px" }}
            to="reviews"
            spy={true}
            smooth={true}
            offset={-60}
          >
            REVIEWS
          </Link>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px !important;
  height: 100vh;
  position: fixed;
  top: 0;
  // padding: 0 20px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  // @media all and (min-width: 360px) and (max-width: 768px) {
  //   width: 100%;
  // }
`;
const SidebarHeader = styled.div`
  padding: 0 10px 0 0;
  @media all and (min-width: 360px) and (max-width: 768px) {
    // margin-right: 30px;
  }
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
  @media all and (min-width: 360px) and (max-width: 768px) {
    margin-right: 20px;
  }
`;
const UlStyle = styled.ul`
  margin: 0 0 0 10px;
  li {
    margin: 20px 20px;
  }
  @media all and (min-width: 576px) and (max-width: 768px) {
    margin-right: 20px;
  }
`;
