import React from 'react'
import PropTypes from 'prop-types'

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts'





// const minHeight = 250
// const maxHeight = 350
// const ratio = 5 / 2

const Container = ({ children, ratio = 5 / 2, minHeight = 250, maxHeight = 350 }) => (

    <div className="content"
         style={{minHeight, maxHeight, "width": "100%", "position": "relative", "display": "inline-block"}}>
        <div style={{marginTop: `${100 / ratio}%` || '100%'}}/>
        <div className="content" style={{minHeight, maxHeight, "position": "absolute", "left": "0", "right": "0", "top": "0", "bottom": "0"}}>
            <ResponsiveContainer style={{hight: 200, width: 100}}>
                { children }
            </ResponsiveContainer>
        </div>
    </div>
)

Container.propTypes = {
    children: PropTypes.element.isRequired,
    ratio: PropTypes.number,
    minHeight: PropTypes.number,
    maxHeight: PropTypes.number,
}

export default Container