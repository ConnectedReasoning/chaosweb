import React from 'react';
import {Navbar, NavItem, Icon, Dropdown } from 'react-materialize';

import { Link } from "react-router-dom";
const Menu  = (props) => {
  //console.log('in menu props is ', props)`;

  return(
    <div className="menu">
      <Navbar
        alignLinks="right"
        brand={<Link to="/">Covid Map</Link>}
        id="mobile-nav"
        menuIcon={<i className="material-icons">menu</i>}
        fixed
      >
        <Link to="/">Show COVID-19 map</Link>
        <Link to="/build">Build COVID-19 map</Link>
      </Navbar>
    </div>
  )
}
export default Menu