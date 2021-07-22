import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {BellOutlined,UserOutlined} from '@ant-design/icons'
import './../../assets/styles/header.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item className="nav_item" key="mail">
          <a href=""><BellOutlined className="nav_icon"></BellOutlined></a>
        </Menu.Item>
        <Menu.Item className="nav_item" key="app">
          <a href=""><UserOutlined className="nav_icon"></UserOutlined></a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;