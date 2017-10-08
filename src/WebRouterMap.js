import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import PropTypes from 'prop-types'
import routes from './components/Routes'


const WebRouterMap = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            { routes }
        </ConnectedRouter>
    )
}

WebRouterMap.propTypes = {
    history: PropTypes.object,
}

export default WebRouterMap