import React from 'react'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/sankey'

var echarts = require('echarts');

import productData from '../../../data/product.json'


export default class SanKeySimple extends React.Component {

    componentDidMount() {
        var myChart = echarts.init(document.getElementById('main'))
        console.log("dsadasdsadasdasdasdsa", productData.links)
        myChart.setOption({
            title: {
                text: 'Sankey Diagram'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'

            },
            series: [
                {
                    type: 'sankey',
                    layout:'none',
                    data: productData.nodes,
                    links: productData.links,
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#aaa'
                        }
                    },
                    lineStyle: {
                        normal: {
                            curveness: 0.5
                        }
                    }
                }
            ]
        });
    }


    render() {
        return (
            <div id="main" style={{width: "100%", height: "100%"}}>

            </div>
        )
    }
}