import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Image } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal">
       <Menu.Item className="nav_item" key="mail">
          <a href="">JF</a>
        </Menu.Item>
        <Menu.Item className="nav_item" key="alipay">
          <a href="">メンバー</a>
        </Menu.Item>
        <SubMenu title={<span>その他</span>} className="nav_item">
          <MenuItemGroup title="Item 1" className="nav_item">
            <Menu.Item className="nav_item" key="setting:1">Option 1</Menu.Item>
            <Menu.Item className="nav_item" key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
       
      </Menu>
    );
  }
}
export default LeftMenu;