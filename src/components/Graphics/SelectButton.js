import React from 'react'
import ReactDOM from 'react-dom'
import {Icon, Button, Menu, Dropdown, message} from 'antd'


export default class SelectButton extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            selectName: '按天'
        }
    }

    handleClick = (e) => {
        this.setState({
            selectName: e.key === undefined ? '按天' : e.key
        })
    }

    render() {



        const selectMenu = (
            <Menu onClick={this.handleClick}>
                <Menu.Item key="按小时">
                    按小时
                </Menu.Item>
                <Menu.Item key="按天">
                    按天
                </Menu.Item>
                <Menu.Item key="按周">
                    按周
                </Menu.Item>
                <Menu.Item key="按月">
                    按月
                </Menu.Item>
            </Menu>
        );

        return (



            <div className="selectButton" style={{ "margin-top": "2px" }}>
                <Button icon="area-chart" type="dashed"></Button>
                &nbsp;&nbsp;&nbsp;
                <Button icon="bar-chart" type="dashed"></Button>
                &nbsp;&nbsp;&nbsp;

                <Dropdown key="aaa" overlay={selectMenu} trigger={['click']}>
                    <a className="ant-dropdown-link" href="#">
                        {this.state.selectName} <Icon type="down" />
                    </a>
                </Dropdown>
            </div>

        )
    }
}