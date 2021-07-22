import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
// import { Drawer, Button, Menu,Image } from 'antd';
import './../../assets/styles/header.css'
class NavBar extends Component {
  
render() {
    return (
      <nav className="nav_bar">
          <div className="left_menu">
            <div className="logo">
            <img src={"./img/logo.png"} className="logo_img">
            
            </img>
            
          </div>
          <LeftMenu></LeftMenu>
          </div>
        
        <div className="right_menu">
        <RightMenu></RightMenu>
        </div>
      </nav>
      
    );
}
}
export default NavBar;