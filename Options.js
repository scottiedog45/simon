import React from 'react';
import {Picker, Slider, Switch, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PlayButton from './PlayButton';
import Logo from './Logo';
import { StackNavigator } from 'react-navigation';
import BackButton from './BackButton'


class Options extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      music: true,
      sound: true,
    }

  }

  toggleMusic = () => {
    this.setState({
      music: !this.state.music
    })
  }

  toggleSound = () => {
    this.setState({
      sound: !this.state.sound
    })
  }

  static navigationOptions = { header: null }

  render() {

    

    return (
      <View style={styles.container}>
        <Logo />
        <View>
          <Text style={styles.switchLabel}>Music</Text>
          <View style={styles.switchView}>
            <Text style={styles.switchTextLeft}>Off</Text>
              <Switch 
                onValueChange = {() => this.toggleMusic()}
                value = {this.state.music}
              />
            <Text style={styles.switchTextRight}>On</Text>
          </View>
        </View>
        <View style={styles.switchLabel}>
          <Text style={styles.switchLabel}>Sound</Text>
          <View style = {styles.switchView}>
            <Text style={styles.switchTextLeft}>Off</Text>
          <Switch
            onValueChange={() => this.toggleSound()}
            value={this.state.sound}
          />
            <Text style={styles.switchTextRight}>On</Text>
          </View>
        </View>
        <BackButton />
      </View>
    );
  }
}

export default StackNavigator({
  Options: {
    screen: Options,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchView: {
    flexDirection: 'row',
    marginBottom: 40
  },
  switchTextLeft: {
    paddingRight: 10,
    paddingTop: 8
  },
  switchTextRight: {
    paddingLeft: 10,
    paddingTop: 8
  },
  switchLabel: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 30
  }
});