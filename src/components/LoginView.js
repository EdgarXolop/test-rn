
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import Icon from 'react-native-vector-icons/Ionicons';

var LoginBehavior = {
  'ios': FBLoginManager.LoginBehaviors.Browser,
  'android': FBLoginManager.LoginBehaviors.Native
}

export default class LoginView extends Component {


  login(data){
    console.warn(data)
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
