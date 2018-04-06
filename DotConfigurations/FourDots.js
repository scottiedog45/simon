import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Logo from '../Logo';
import { StackNavigator } from 'react-navigation';

export default class FourDots extends React.Component {
  constructor(props) {
    super(props);
    this.State = {
      
    }
  }

  static navigationOptions = { header: null };

  render() {

  let FourColors= ['blue', 'red', 'yellow', 'green'];

  let dots = FourColors.map((color, index) => (
    <TouchableOpacity 
      onPress={() => alert(index)}
      key={index}
      style={{
        backgroundColor: color,
        height: 100,
        width: 100
      }} />
  ));

console.log(dots)

  

    return (
      <View style={styles.container}>
        <View>
          {dots}
        </View>
      </View>
    );
  }
}


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
