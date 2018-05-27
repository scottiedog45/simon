import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import PlayButton from './PlayButton';
import Logo from './Logo';
import { StackNavigator } from 'react-navigation';
import {getHighScores} from './fetch';
import BackButton from './BackButton';

class HighScores extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      highScores: []
    };
  }

  static navigationOptions = { header: null }

  getHighScores = () => {
    fetch('http://localhost:8000' + '/')
      .then((response) => response.json())
      .then(responseJson => {
        this.setState({
          highScores: responseJson
        })})
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.getHighScores();
  }

  render() {

    const highscores = this.state.highScores.map((score, i) => (
        <Text style={styles.highScore}>{score.name}: {score.score}</Text>
    ))

    return (
      <View style={styles.container}>
        <Logo />
        <View>
          {highscores}
          </View>
        <TouchableOpacity />
        <BackButton />
      </View>
    );
  }
}

HighScores.defaultProps = [{name: 'nobody', score: 0}]

export default StackNavigator({
  Scores: {
    screen: HighScores,
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
  },
  highScore: {
    marginBottom: 20,
    fontSize: 30
  }
});