/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';

import CommentBox from './CommentBox'

export default class CommentList extends Component {

  constructor(props){
    super(props);

    this.state = {
      comments : this.props.comments
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.comments !== this.props.comments){
      this.setState({
        comments : newProps.comments
      });
    }
  }
  

  render() {
    return (      
        <FlatList 
            data={this.state.comments}  
            renderItem={({item}) => <CommentBox text={item.text}/>}
            keyExtractor={(i, index) => index.toString()} />
    );
  }
}

