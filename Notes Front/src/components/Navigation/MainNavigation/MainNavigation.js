import React from 'react';
import { NavLink } from 'react-router-dom';
import infoPdf from '../../../assets/notes.pdf';
import infoLogo from '../../../assets/info.png';
import MobileToggle from '../MobileToggle/MobileToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './MainNavigation.css';

const mainNavigation = (props) => (
  <nav className="main-nav">
    <MobileToggle onOpen={props.onOpenMobileNav} />
    <div className="main-nav__logo">
      <NavLink to="/">
        <Logo />
      </NavLink>
    </div>
    <div className="spacer" />
    <ul className="main-nav__items">
      <NavigationItems isAuth={props.isAuth} onLogout={props.onLogout} />
    </ul>
    <a href={infoPdf} id="info" target="_blank">
      <img src={infoLogo} alt="" style={{height: '100%'}}/>
    </a>
  </nav>
);

export default mainNavigation;
