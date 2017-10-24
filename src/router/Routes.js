import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from '../../src/component/Login/Login'
import Chat from  '../../src/component/Chat/Chat'
import Search from '../../src/component/Search/Search'


const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key="login" component={Login} title='Login' initial={true}/>
            <Scene key="chat" component={Chat} title='Chat'/>
            <Scene key='search' component={Search} />
        </Scene>

    </Router>
)
export default Routes