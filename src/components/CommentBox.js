import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const AVATAR_SIZE = 32;
const DEFAULT_AVATAR = 'https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png'

export default  CommentBox = (props) => 
      <View style={styles.comment}>
        {
          props.avatar?
          <Image  style={styles.avatar} source={{uri: props.avatar}}/>:
          <Image  style={styles.avatar} source={{uri: DEFAULT_AVATAR}}/>

        }
        <Text style={styles.text}>{props.text}</Text>
      </View>

const styles = StyleSheet.create({
  comment: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row'
  },
  text:{
    fontSize: 16,
    marginLeft:10
  },
  avatar:{
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius:AVATAR_SIZE/2
  }
})