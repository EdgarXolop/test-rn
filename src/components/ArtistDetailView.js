
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {firebaseDatabase} from '../firebase-config'

import ArtistBox from './ArtistBox'
import CommentList from './CommentList'

export default class ArtistDetailView extends Component {

  state = {
    comments : []
  }

  componentDidMount(){
    this.getArtistCommentsRef().on('child_added', this.addedComment)
  }

  componentWillUnmount(){
    
    this.getArtistCommentsRef().off('child_added', this.addedComment)
  }

  addedComment = (data) => {
    const comment = data.val();

    this.setState({
      comments: this.state.comments.concat(comment)
    })
    this.addNewComment();
    this.setState({
      text: ''
    })

  }

  handleSend = () =>{
    const {text} = this.state;
    const artistCommentsRef = this.getArtistCommentsRef();
    var newCommentRef = artistCommentsRef.push();

    newCommentRef.set({
      text
    });
  }
  
  addNewComment = () => {

    this.getArtistRef().transaction((artist)=>{
      if(artist){
        if(artist.commentCount) artist.commentCount++;
        else artist.commentCount = 1;
      }
      return artist || {
        commentCount: 1,
        likeCount: 0,
      }
    });
  }
  
  getArtistRef = () => {
    const {id} = this.props.artist

    return firebaseDatabase.ref(`artist/${id}`)
  }

  getArtistCommentsRef = () => {
    const {id} = this.props.artist

    return firebaseDatabase.ref(`comments/${id}`)
  }

  handleChangeText = (text) => this.setState({text})

  render() {
    const artist = this.props.artist;
    const comments = this.state.comments;

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist}/>
        <Text style={styles.header} >Comentarios</Text>
        <CommentList comments={comments}/>
        <View style={styles.inputContainer}>        
          <TextInput 
            style={styles.input} 
            value={this.state.text}
            placeholder="Write your comment."
            onChangeText={this.handleChangeText}/>
          <TouchableOpacity onPress={this.handleSend}>
            <Icon name="ios-send-outline" size={30} color="#e74c3c"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 10,
  },
  inputContainer:{
    height:50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  input:{
    flex:1,
    height: 50
  },
  header: {
    fontSize:20,
    paddingHorizontal: 15,
    marginVertical:10
  }
});
