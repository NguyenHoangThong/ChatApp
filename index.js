import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routes from './src/router/Routes'

class ChatApp extends Component {
    render() {
        return (
            <Routes/>
        )
    }
}
export default ChatApp

AppRegistry.registerComponent('ChatApp', () => ChatApp)