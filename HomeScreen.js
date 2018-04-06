import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PlayButton from './PlayButton';
import Logo from './Logo';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = { header: null }

  something = () => {
    console.log('something')
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HighScores')}>
          <Text>High Scores</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HowToPlay')}>
          <Text>How To Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Options')}>
          <Text>Options</Text>
        </TouchableOpacity>
        
        
        <PlayButton
        />
      </View>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
