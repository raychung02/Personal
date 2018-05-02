import React from 'react';
import { Link } from 'react-router';

import pf from '../assets/pf-square.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <p className="h3"><Link to="/" onlyActiveOnIndex className="navigation__link" activeClassName="navigation__link--active">Home</Link></p>
        <p className="h3"><Link to="/resume" className="navigation__link" activeClassName="navigation__link--active">Resume</Link></p>
        <p className="h3"><Link to="/portfolio" className="navigation__link" activeClassName="navigation__link--active">Portfolio</Link></p>
      </nav>
      <img src={pf} className="pf" alt="Ray Chung" />
      <div className="right"></div>
    </div>
  );
};

export default Header;
