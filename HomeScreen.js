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
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HowToPlay')}
          style={styles.buttons}>
          <Text
            style={styles.buttonText}>How To Play</Text>
        </TouchableOpacity>
        </View>
        <PlayButton/>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  buttons: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 8
  },
  buttonText: {
    marginTop: 40,
    textAlign: 'center'
  },
  buttonContainer: {
    marginBottom: 120
  }
});
