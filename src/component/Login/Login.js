import React, {Component} from 'react'
import {View, Text} from 'react-native'
import LoginView from './loginView'
import  {Actions} from 'react-native-router-flux'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = () => {
        if(this.state.email == 'thong')
            Actions.search();
        else alert('login failed');
    }

    render() {
        return (
            <View>
                <LoginView
                    email={(text) => this.handleEmail(text)}
                    password = {(text) => this.handlePassword(text)}
                    login = {() => this.login()}
                />
            </View>


        )
    }
}

export default Login