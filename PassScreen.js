import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PlayButton from './PlayButton';
import Logo from './Logo';
import { StackNavigator } from 'react-navigation';

class PassScreen extends React.Component {

  static navigationOptions = { header: null }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text>
          High Scores!
          </Text>
        <TouchableOpacity />
      </View>
    );
  }
}

export default PassScreen({
  PassScreen: {
    screen: PassScreen,
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