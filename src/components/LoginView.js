
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import {Actions} from 'react-native-router-flux';
import firebase,{firebaseAuth} from '../firebase-config'

const {FacebookAuthProvider} = firebase.auth;

const LoginBehavior = {
  'ios': FBLoginManager.LoginBehaviors.Browser,
  'android': FBLoginManager.LoginBehaviors.Native
}

export default class LoginView extends Component {

  state = {
    credentials:{}
  }

  authenticateUser=(accessToken)=>{
    const credential = FacebookAuthProvider.credential(accessToken);

    firebaseAuth.signInWithCredential(credential).then((credentials)=>{
      this.setState({credentials})
      Actions.home();
    }).catch((error)=>{
      console.warn("Sign In Error", error);
    });
  }

  loginFound = (data)=>{
    this.authenticateUser(data.credentials.token)
  }

  login = (data,error)=>{
    if(!error){
      this.authenticateUser(data.credentials.token)
    }
  }
  
  logout = ()=>{
    
    this.setState({credentials:{}})
  }

  render() {

    return (
      <View style={styles.container}>
        <View  style={styles.content}>
          <Text style={styles.welcome}>Bienvenido!</Text>
          <Text style={styles.fbLogin}>{this.state.credentials.displayName}</Text>
          <View  style={styles.contentfb}>
            <FBLogin 
                style={styles.fbLogin}
                ref={(fbLogin) => { this.fbLogin = fbLogin }}
                loginBehavior={LoginBehavior[Platform.OS]}
                permissions={["email","public_profile"]}
                onLogin={this.login}
                onLoginFound={this.login}
                onLogout={this.logout}
                onLoginNotFound={this.logout}
                onPermissionsMissing={this.logout}
              >
              </FBLogin>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    flexDirection: 'column',
  },
  content: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentfb: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  welcome:{
    fontSize: 24,
    color: '#333'
  }
});
