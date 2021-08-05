import React,{Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends Component{
  render(){
    return(
      <View style = {{flex: 1}}>
        <AppContainer/>
      </View>
    )
  }
}

var switchContainer = createSwitchNavigator({
  HomeScreen: HomeScreen,
  QuizScreen: QuizScreen,
})

const AppContainer = createAppContainer(switchContainer);

//make quiz