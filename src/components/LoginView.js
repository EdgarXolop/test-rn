
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import {Actions} from 'react-native-router-flux'
//import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAD2ovljJrSBlamzSI7Hi_nR6E3bsaKDYY",
  authDomain: "foobarmusic-9190f.firebaseapp.com",
  databaseURL: "https://foobarmusic-9190f.firebaseio.com",
  projectId: "foobarmusic-9190f",
  storageBucket: "foobarmusic-9190f.appspot.com",
  messagingSenderId: "442038367374"
};
//firebase.initializeApp(config);

const LoginBehavior = {
  'ios': FBLoginManager.LoginBehaviors.Browser,
  'android': FBLoginManager.LoginBehaviors.Native
}

export default class LoginView extends Component {


  login(data,error){
    if(!error){
      console.warn(data);
      Actions.home();
    }
  }

  render() {

    return (
      <View style={styles.container}>
        
        <FBLogin 
            style={styles.fbLogin}
            ref={(fbLogin) => { this.fbLogin = fbLogin }}
            loginBehavior={LoginBehavior[Platform.OS]}
            permissions={["email","public_profile"]}
            onLogin={this.login}
          >
          </FBLogin>
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
    flexDirection: 'row',
  },
  fbLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
});
