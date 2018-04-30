/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList, 
  TouchableOpacity ,
} from 'react-native';
import {Actions} from 'react-native-router-flux'

import ArtistBox from './ArtistBox'

export default class ArtistList extends Component {

  constructor(props){
    super(props);

    this.state = {
      artists : this.props.artists
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.artists !== this.props.artists){
      this.setState({
        artists : newProps.artists
      });
    }
  }
  
  handlePress(artist){
    Actions.artistDetail({artist});
  }

  render() {
    return (      
        <FlatList 
            data={this.state.artists}  
            renderItem={({item}) => <TouchableOpacity onPress={() => this.handlePress(item)}>
                                      <ArtistBox artist={item} />
                                    </TouchableOpacity>} 
            keyExtractor={(a, index) => index.toString()} />
    );
  }
}

