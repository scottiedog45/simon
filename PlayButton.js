import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {StackNavigator, withNavigation} from 'react-navigation'

class PlayButton extends React.Component {
 constructor(props) {
   super(props)
 }
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress = {() => {this.props.navigation.navigate('Game')}}
        >
        <Text style={styles.text}>
          PLAY
        </Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(PlayButton);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    height: 200,
    width: 200,
    backgroundColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
    marginBottom: 30
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40
  }
});
