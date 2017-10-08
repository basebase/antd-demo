import React from 'react'
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd'

import Sider from '../Sider'
import '../../css/index.css'
import 'antd/dist/antd.css'
import './index.css'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Sider />
                <div id="rightWrap">
                    {/*当前组件和子组件只要被点击就会展示, react-router3会比较直观...*/}
                    {this.props.children}
                </div>
            </div>
        )
    }

}
