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
      <View>
        <Text
          onPress={() => {this.props.navigation.navigate('Home')}}
          style={{
            marginBottom: 40
          }}
        >
          Back
          </Text>
        <TouchableOpacity />
      </View>
    );
  }
}

export default withNavigation(BackButton)