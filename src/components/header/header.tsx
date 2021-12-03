import '../header/header.css';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

class ReactReference {
  menuRef: React.MutableRefObject<any>;
  iconsRef: React.MutableRefObject<any>;
  constructor() {
    this.menuRef = useRef();
    this.iconsRef = useRef();
  }
}

const Header = () => {
  let clicked = false;
  const menu = new ReactReference().menuRef;
  const icons = new ReactReference().iconsRef;

  const toogleButtonSetActive = () => {
    clicked = !clicked;
    if (clicked) {
      menu.current.classList.toggle('active');
      icons.current.classList.toggle('active');
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <div className="header_logo">
            <i className="fas fa-calculator"></i>
            <span>주식 계산기</span>
          </div>
        </Link>
        <ul className="header_menu" ref={menu}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>평단 계산</li>
          </Link>
          <Link to="/stockprofit">
            <li>수익 계산</li>
          </Link>
        </ul>
        <ul className="header_icons" ref={icons}>
          <li>
            <a href="https://github.com" target="_blank">
              <span>깃허브</span>
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://includecoding.tistory.com/" target="_blank">
              <span>블로그</span>
              <i className="fas fa-blog"></i>
            </a>
          </li>
        </ul>
        <a href="#" onClick={toogleButtonSetActive} className="header_toogleButton">
          <i className="fas fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
