import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'

const menu = (
    <Menu>
        <Menu.Item>
            <a href="/user">用户中心</a>
        </Menu.Item>
        <Menu.Item>
            <a href="/login">退出登陆</a>
        </Menu.Item>
    </Menu>
)

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let logoutWrap = {
            textAlign: 'right',
            paddingRight: 25,
            borderBottom: '1px solid #ddd',
            paddingBottom: 15
        }

        return (
            <div style={logoutWrap}>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link">
                        Hi 小墨鱼 <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        )
    }
}

