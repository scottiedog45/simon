import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (     
        <Text style={styles.text}>
          SIMON
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 40,
    position: 'absolute',
    top: 60
  }
});