import React from 'react'
import Mock from 'mockjs'

import Footer from '../../Footer/index'
import { Header } from '../../Header/index'

import { Card, Row, Col, Button, Icon } from 'antd'

import $ from "jquery";

import { LineReact } from '../../Graphics/Line'
import { lineData } from '../../Graphics/Line/data'

import SimpleLine from '../../Graphics/Line/SimpleLine'
import SimpleBar from '../../Graphics/Bar/SimpleBar'
import SimpleArea from '../../Graphics/Area/SimpleArea'
import LineBarArea from '../../Graphics/LineBarArea/LineBarArea'
import SimpleReadar from '../../Graphics/Radar/Radar'
import SimpleScatter from '../../Graphics/Scatter/SimpleScatter'

import SelectButton from '../../Graphics/SelectButton'



import 'antd/dist/antd.css'
import {withRouter} from "react-router-dom";


let debug = 1
if (debug) {
    Mock.mock(/getProfile/,{
        "idx|4":[{
            "key|1":['紫外线指数','穿衣指数','感冒指数','洗车指数'],
            "value|1-7":"★"
        }]
    })
}

const colProps = {
    lg: 12,
    md: 24,
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx: []
        }
    }

    componentDidMount() {
        $.ajax({
            url:'getProfile'
        })
            .done(function(res) {
                let data = JSON.parse(res);
                // 需要绑定this
                this.setState({idx:data.idx})
            }.bind(this))
    }

    render() {
        return (
            <div>
                <Footer />
                { Header("运营数据概览") }

                <Row gutter={32}>
                    <Col {...colProps}>
                        <Card title="SimpleLineChart" extra={<SelectButton/>}>
                            <SimpleLine/>
                        </Card>
                    </Col>
                    <Col {...colProps}>
                        <Card title="DashedLineChart" extra={<SelectButton/>}>
                            <SimpleBar />
                        </Card>
                    </Col>
                    <Col {...colProps}>
                        <Card title="CustomizedDotLineChart" extra={<SelectButton/>}>
                            <SimpleArea />
                        </Card>
                    </Col>
                    <Col {...colProps}>
                        <Card title="VerticalLineChart" extra={<SelectButton/>}>
                            <LineBarArea />
                        </Card>
                    </Col>

                    <Col {...colProps}>
                        <Card title="VerticalLineChart" extra={<SelectButton/>}>
                            <SimpleReadar />
                        </Card>
                    </Col>

                    <Col {...colProps}>
                        <Card title="VerticalLineChart" extra={<SelectButton/>}>
                            <SimpleScatter />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Home)


