import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PlayButton from './PlayButton';
import Logo from './Logo';
import { StackNavigator } from 'react-navigation';
import BackButton from './BackButton';

class HowToPlay extends React.Component {

  static navigationOptions = { header: null }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={styles.text}>
          It's just like the old-school simon game =). Touch the dots in the order that they flash. 
          </Text>
        <TouchableOpacity />
        <BackButton />
      </View>
    );
  }
}

export default StackNavigator({
  HowToPlay: {
    screen: HowToPlay,
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
  },
  text: {
    maxWidth: 230,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50
  }
});