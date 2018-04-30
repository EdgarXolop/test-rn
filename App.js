/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
} from 'react-native';

import {Scene, Stack, Router} from 'react-native-router-flux'

import HomeView from './src/components/HomeView'
import ArtistDetailView from './src/components/ArtistDetailView'
import Login from './src/components/LoginView'


export default class App extends Component {

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="Login" component={Login} hideNavBar={true}/>
          <Scene key="home" component={HomeView} hideNavBar={true}/>
          <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={false}/>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
});
