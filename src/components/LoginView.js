
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import FBSDK,{
    LoginButton,
    AccessToken
  } from 'react-native-fbsdk';

export default class HomeView extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos!</Text>
        <LoginButton
          readPermissions={["public_profile","email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent:'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600'
  }
});
