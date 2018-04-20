import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PlayButton from './PlayButton';
import Logo from './Logo';
import { StackNavigator } from 'react-navigation';
import FourDots from './DotConfigurations/FourDots'
import BackButton from './BackButton';

class Playing extends React.Component {
  constructor(props) {
    super(props);
    this.State = {
      correctSequence: [],
      userInput: [],
      time: null
    }
  }

  static navigationOptions = { header: null }


  

  render() {
    return (
      <View style = {styles.container}>
        <Logo />
          <View>
          <FourDots />
          </View>
          <BackButton />
      </View>
    );
  }
}

export default StackNavigator({
  Game: {
    screen: Playing,
  },
});

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: 'green'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
