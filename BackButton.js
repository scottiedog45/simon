import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PlayButton from './PlayButton';
import Logo from './Logo';
import { StackNavigator, withNavigation } from 'react-navigation';

class BackButton extends React.Component {
  constructor(props){
    super(props)
  }

  static navigationOptions = { header: null }

  render() {
    return (
      <TouchableOpacity style={styles.button}
        onPress={() => { this.props.navigation.navigate('Home') }}>
        <Text
          style={styles.buttonText}
        >
          back
          </Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 8,
    marginTop: 30
  },
  buttonText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30
  }
});

export default withNavigation(BackButton)