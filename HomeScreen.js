import React,{Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class HomeScreen extends Component{
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }
  render(){
    return(
      <SafeAreaProvider style = {styles.container}>
        <Header
          centerComponent={{ text: 'Find My News', style: { color: '#fff' } }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style = {styles.goButton}
          onPress = {() => this.props.navigation.navigate('QuizScreen')}>
          <Text style = {styles.buttonText}>Take the Quiz</Text>
        </TouchableOpacity>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#1fefa6'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  }
});