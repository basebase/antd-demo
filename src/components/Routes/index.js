import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter, Redirect } from 'react-router-dom'
import App from '../App'
import Login from '../Login'
import Home from '../Page/Home'
import User from '../Page/User'
import DBTable from '../DBTable'


const routes = (
    <div>
        <Switch>
            <Route path="/login" component={Login} />
            {/*必须要用<App>进行包裹才可以为子组件...! 奇葩*/}
            <App>
                <Route path="/operating" component={Home} />
                <Route path="/user" component={User}/>
                <Route path="/product" component={DBTable}/>
            </App>
        </Switch>
    </div>
)

export default routes