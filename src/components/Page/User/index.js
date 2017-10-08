import React from 'react'
import mianzi from '../../../img/mianzi.jpg'
import { Card, Row, Col } from 'antd'

import Footer from '../../Footer/index'
import { Header } from '../../Header/index'

import 'animate.css/source/_base.css'
import 'animate.css/source/bouncing_entrances/bounceInLeft.css'
import 'animate.css/source/bouncing_entrances/bounceInRight.css'

import 'antd/dist/antd.css'

const titleStyle = {
    padding:'5px 20px',
    color:'#5C6B77',
    marginTop: 100,
    marginBottom: 10,
    borderRadius:3,
    textAlign:'center',
    fontSize:20
};


export default class User extends React.Component {
    render() {
        return (



            <div>
                <Footer />
                { Header("关于") }
                <div style={ titleStyle }>
                    <p className="animated bounceInLeft">大家好我是小墨鱼(:◎)≡  </p>
                    <p className="animated bounceInRight">一个喜欢二次元的骚年</p>
                    <p className="animated bounceInLeft">双重人格，我是大神经。</p>
                    <p className="animated bounceInRight">数据开发工程师（不仅限于数据开发）。</p>
                    <p className="animated bounceInLeft">下面就是你们的表演时间咯 …..φ(・∀・＊)</p>

                    <p className="animated bounceInRight">喜欢就给个Star..............!</p>
                    <img src={ mianzi } style={{ "height": 320, "width": 450 }}/>

                </div>
            </div>

        )
    }
}