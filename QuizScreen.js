import React,{Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, Linking } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import { WebView } from 'react-native-webview';

export default class QuizScreen extends Component{
  render(){
    return(
      <SafeAreaProvider style = {styles.container}>
        <Header
          centerComponent={{ text: 'Find My News', style: { color: '#fff' } }}
        />

        <Text style={{fontSize: 20, fontFamily:'Arial'}} onPress={ ()=> Linking.openURL('https://uquiz.com/UbCr57')} >Click Here to Open the Quiz.</Text>
      </SafeAreaProvider>
    )
  }
}
//fill out and link google form in touchable opacity
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },

  submitButton: {
    width: '20%',
    height: 40,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#1fefa6'
  }
})