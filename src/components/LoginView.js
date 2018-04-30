
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import {Actions} from 'react-native-router-flux';
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAD2ovljJrSBlamzSI7Hi_nR6E3bsaKDYY",
  authDomain: "foobarmusic-9190f.firebaseapp.com",
  databaseURL: "https://foobarmusic-9190f.firebaseio.com",
  projectId: "foobarmusic-9190f",
  storageBucket: "foobarmusic-9190f.appspot.com",
  messagingSenderId: "442038367374"
};

firebase.initializeApp(config);

const {FacebookAuthProvider} = firebase.auth;
const firebaseAuth = firebase.auth();

const LoginBehavior = {
  'ios': FBLoginManager.LoginBehaviors.Browser,
  'android': FBLoginManager.LoginBehaviors.Native
}

export default class LoginView extends Component {

  authenticateUser=(accessToken)=>{
    const credential = FacebookAuthProvider.credential(accessToken);

    console.warn(credential);

    firebaseAuth.signInWithCredential(credential).then(function(user) {
      console.warn("Sign In Success", user);
      var currentUser = user;
      
    }).catch(function(error) {
      console.warn("Sign In Error", error);
    });
  }

  login = (data,error)=>{
    if(!error){
      //console.warn(data.credentials);
      this.authenticateUser(data.credentials.token)
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
