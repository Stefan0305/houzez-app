import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import HeaderNav from "../HeaderNav/HeaderNav";
import Modal from "styled-react-modal";

function Header(props) {
  const [locationPath, setLocationPath] = useState(window.location.pathname);
  const [isHome, setIsHome] = useState();
  useEffect(() => {
    if (locationPath === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [locationPath]);

  //   modal functionalities
  const LeftModal = Modal.styled`
  position: absolute;
  left: -250px;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: white;
  `;
  const RightModal = Modal.styled`
  position: absolute;
  right: -250px;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: white;
  `;

  const [leftModalIsOpen, setLeftModalIsOpen] = useState(false);
  const [rightModalIsOpen, setRightModalIsOpen] = useState(false);

  function openLeftModal() {
    setLeftModalIsOpen(true);
    props.toggleRight();
  }
  function closeLeftModal() {
    setLeftModalIsOpen(false);
    props.toggleRight();
  }
  function openRightModal() {
    setRightModalIsOpen(true);
    props.toggleLeft();
  }
  function closeRightModal() {
    setRightModalIsOpen(false);
    props.toggleLeft();
  }

  return (
    <header className={isHome ? "home" : ""}>
      <LeftModal
        className="modalLeft"
        isOpen={leftModalIsOpen}
        onBackgroundClick={closeLeftModal}
        allowScroll={false}
      >
        <HeaderNav />
      </LeftModal>
      <RightModal
        className="modalRight"
        isOpen={rightModalIsOpen}
        onBackgroundClick={closeRightModal}
        allowScroll={false}
      >
        <ul>
          <li>
            <button className="btn">Create a listing</button>
          </li>
          <li>
            <i className="fa-solid fa-lock"></i>
            <span>Login</span>
          </li>
        </ul>
      </RightModal>

      <div className="container">
        <div className="hamburger-menu" onClick={openLeftModal}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="logo">
          <a href="/" className="logo-white">
            <img src="/logo-houzez-white.png" alt="logo" />
          </a>
          <a href="/" className="logo-color">
            <img src="/logo-houzez-color@2x.png" alt="logo" />
          </a>
        </div>
        <HeaderNav />
        <div className="profileContainer">
          <i className="fa-solid fa-user desktop-icon"></i>
          <i
            className="fa-solid fa-user mobile-icon"
            onClick={openRightModal}
          ></i>
          <button>Create a listing</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
