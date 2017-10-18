import React from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon, Button } from 'antd'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { getMenus } from './LoadMenuConfig'
import menus from '../../menu'

import './index.css'
import 'antd/dist/antd.css'

import logo from '../../img/logo.png'

import {handleClick} from './MenuClick'


const SubMenu = Menu.SubMenu;

export default class Sider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      current: document.cookie.split(";")[0].split("=")[1],
    };

    this.toggleCollapsed = this.toggleCollapsed.bind(this)
  }

  toggleCollapsed = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    })
  }

  changeCookie = (e) => {
      console.log("changeCookie => ", e)
  }

  handleClick = (item) => {
      this.setState({ current: item.key });
      this.changeCookie(item.key)
      // 处理点击跳转, 页面可能会多, 所以抽离到另外一个js文件, 单独修改
      handleClick(item)

  }



  render() {
    return (
        <div id="leftMenu">
          <img src={ logo } width="50" id="logo" onClick={this.toggleCollapsed} />

          <Router>
              <Menu
                  onClick={this.handleClick}
                  mode={'inline'}
                  inlineCollapsed={this.state.collapsed}
              >
                  {getMenus(menus)}
              </Menu>
          </Router>

          <div id="copyright">Copyright © Jason</div>
        </div>
    )
  }
}
