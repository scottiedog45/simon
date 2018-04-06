import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Playing from './Playing';
import HighScores from './HighScores';
import Options from './Options';
import HowToPlay from './HowToPlay';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      },
    Game: {
      screen: Playing
    },
    Options: {
      screen: Options
    },
    HighScores: {
      screen: HighScores
    },
    HowToPlay: {
      screen: HowToPlay
    }
  }, {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}

