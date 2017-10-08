import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { routerMiddleware, connectRouter } from 'connected-react-router'
import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'

import WebRouterMap from './WebRouterMap'
import rootReducer from './components/Reducers'


const history = createBrowserHistory()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
        ),
    ),
)

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <WebRouterMap history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render()


// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./WebRouterMap', () => {
        render()
    })

    // Reload reducers
    module.hot.accept('./components/Reducers', () => {
        store.replaceReducer(connectRouter(history)(rootReducer))
    })
}