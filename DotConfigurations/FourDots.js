import React from 'react';
import { Alert, StyleSheet, Text, View, Button, TouchableOpacity, Animated, Easing } from 'react-native';
import Logo from '../Logo';
import { StackNavigator } from 'react-navigation';


export default class FourDots extends React.Component {
  constructor(props) {
    super(props);
    this.animatedRed = new Animated.Value(0);
    this.animatedBlue = new Animated.Value(0);
    this.animatedYellow = new Animated.Value(0);
    this.animatedGreen = new Animated.Value(0);
    this.animationSequence = [];
    this.userGuesses=[];
    this.guessIndex= 0;
    this.correctSequence=[];
    this.colors=['blue', 'green', 'red', 'yellow'];
    this.state = {
    backgroundColor: 'none',
    disabled: false,
    halfFlashSpeed: 400
    }
  }

  static navigationOptions = { header: null };

  componentDidMount() {
    this.generateAndAppendRandomColor();
    this.animate();
  }

  generateAndAppendRandomColor(){
    let x = Math.floor(Math.random() * 4);
    let color = this.colors[x];
    this.addColorAnimationToSequence(color);
    this.correctSequence.push(color);
    this.setState({
      guessing: true
    });
    console.log(this.correctSequence);
    console.log(this.animationSequence);
  }

  addColorAnimationToSequence(color){
    if (color === 'blue') {
      this.animationSequence.push(
        Animated.timing(
          this.animatedBlue, {
            toValue: 0.5,
            duration: this.state.halfFlashSpeed
          }
        ),
        Animated.timing(
          this.animatedBlue, {
            toValue: 0,
            duration: this.state.halfFlashSpeed
          }
        )
      )
    } else if (color === 'green') {
      this.animationSequence.push(
        Animated.timing(
          this.animatedGreen, {
            toValue: 0.5,
            duration: this.state.halfFlashSpeed
          }
        ),
        Animated.timing(
          this.animatedGreen, {
            toValue: 0,
            duration: this.state.halfFlashSpeed
          }
        )
      )
    } else if (color === 'yellow') {
      this.animationSequence.push(
        Animated.timing(
          this.animatedYellow, {
            toValue: 0.5,
            duration: this.state.halfFlashSpeed
          }
        ),
        Animated.timing(
          this.animatedYellow, {
            toValue: 0,
            duration: this.state.halfFlashSpeed
          }
        )
      )
    } else if (color === 'red') {
      this.animationSequence.push(
        Animated.timing(
          this.animatedRed, {
            toValue: 0.5,
            duration: this.state.halfFlashSpeed
          }
        ),
        Animated.timing(
          this.animatedRed, {
            toValue: 0,
            duration: this.state.halfFlashSpeed
          }
        )
      )
    }
  }

  checkAnswer(input){
    let guessIndex = this.state.guessIndex
    if (this.userGuesses.length < this.correctSequence.length) {
      if (this.userGuesses[guessIndex] === this.correctSequence[guessIndex]) {
        console.log('fabulous');
        this.state.guessIndex +=1;
        return
      } else {
        Alert.alert(
          'youFailed',
          'try again!',
        [
          {text: 'start over', onPress:()=> {this.failureReset()}},
          {text: 'second button', onPress: ()=> {console.log('secondbuttonwaspressed')}}
        ],
        {cancelable: false});
        return
      }
    } else if (this.userGuesses.length === this.correctSequence.length) {
      if (this.userGuesses[guessIndex] === this.correctSequence[guessIndex]) {
        this.userGuesses = [];
        this.generateAndAppendRandomColor();
        this.animate();
      } else {
        Alert.alert(
          'youFailed',
          'try again!',
          [
            { text: 'start over', onPress: () => { this.failureReset()}}
          ],
          { cancelable: false });
        return;
      }
    }
  }

  failureReset() {
    this.correctSequence = [];
    this.userGuesses =[];
    this.animationSequence = [];
    this.guessIndex = 0;
    this.generateAndAppendRandomColor();
    this.animate();
  }

  enableControlsAndGuessing(){
    this.setState({
      disabled: false
    });
    this.restartGuessIndex();
    console.log('enable');
  }

  restartGuessIndex(){
    this.setState({
      guessIndex: 0
    })
  }

  disableControls(){
    this.setState({
      disabled: true
    });
    console.log('disable');
  }

  animate() {
    this.disableControls();
    Animated.sequence(
      this.animationSequence
    ).start(() => this.enableControlsAndGuessing());
  }

  render() {

    let blueColor = this.animatedBlue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0)']
    })

    let greenColor = this.animatedGreen.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0)']
    })

    let yellowColor = this.animatedYellow.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0)']
    })

    let redColor = this.animatedRed.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0)']
    })

    pressBlue = () => {
      this.userGuesses.push('blue');
      this.checkAnswer('blue');
    }

    pressRed = () => {
      this.userGuesses.push('red');
      this.checkAnswer('red');
    }

    pressGreen = () => {
      this.userGuesses.push('green');
      this.checkAnswer('green');
      }

    pressYellow = () => {
      this.userGuesses.push('yellow');
      this.checkAnswer('yellow');
      }
 
 return (
        <View>
          <View 
            style={{
            flexDirection: 'row',
            marginTop: 150
            }}>
            <TouchableOpacity
              onPress={()=>{pressBlue()}}
              disabled={this.state.disabled}
              style={{
                backgroundColor: 'blue',
              }}>
              <Animated.View
              style={{
                position: 'relative',
                width: 100,
                height: 100,
                backgroundColor: blueColor,
              }}/>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.disabled}
              onPress={()=>{pressRed()}}
              style={{  
                backgroundColor: 'red',
              }}>
              <Animated.View
                style={{
                  position: 'relative',
                  width: 100,
                  height: 100,
                  backgroundColor: redColor,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: 50
          }}>
            <TouchableOpacity
            disabled={this.state.disabled}
              onPress={() => {pressGreen() }}
              style={{
                backgroundColor: 'green',
              }}>
              <Animated.View
                style={{
                  position: 'relative',
                  width: 100,
                  height: 100,
                  backgroundColor: greenColor,
                }}/>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={this.state.disabled}
              onPress={() => {pressYellow() }}
              style={{
                backgroundColor: 'yellow',
              }}>
              <Animated.View
                style={{
                  position: 'relative',
                  width: 100,
                  height: 100,
                  backgroundColor: yellowColor, 
                }}/>
            </TouchableOpacity>
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
