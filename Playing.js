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
          <BackButton style={styles.backButton}/>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    marginTop: 50,
    color: 'white'
  }
});
