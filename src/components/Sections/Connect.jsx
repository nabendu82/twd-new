import React from "react";
import styled from "styled-components";

export default function Connect() {
  return (
    <Wrapper id="connect">
      <div className="whiteBg">
        {/* <h1 className="font60 full_stack_heading">CONNECT</h1> */}
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold sec_headings">CONNECT</h1>
            <img
              className="connect_image"
              src="https://twd.codes/static/pic02-ee98eb21407feb124602ced3f63ce6ca.jpg"
              alt="connect_img"
            />
            <ul className="connect_lists">
              <li>
                I know that you must be receiving tons of emails from a lot of
                marketers, and don't want to connect. But this one is from a
                developer.
              </li>
              <li>
                I know that you might have seen my content on YouTube or
                LinkedIn. And then you found something valuable, which got us
                connected.
              </li>
              <li>I will promise you one thing...</li>
              <li>
                Every single email I send you, whether it's a webinar reminder
                or a content piece or, my only intention is to help you succeed
                in our life and career.
              </li>
            </ul>
            <a
              href="https://twd-codes.ck.page/5ac21f764b"
              target="_blank"
              rel="noreferrer"
            >
              <button className="connect_btn animate pointer radius8">
                connect
              </button>
            </a>
            <ul className="connect_icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/nabendu-biswas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/social-linkedin-256.png"
                    alt="fb_icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCRf7mazcufqZxd2pR3oQJuQ?sub_confirmation=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/18-youtube-256.png"
                    alt="fb_icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/nabendu.biswas.77/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/social-facebook-256.png"
                    alt="fb_icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nabendu.codes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png"
                    alt="fb_icon"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/nabendu82"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/03-twitter-256.png"
                    alt="fb_icon"
                  />
                </a>
              </li>
            </ul>
            <hr className="horizontal_line" />
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 30px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
