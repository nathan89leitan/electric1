import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator,} from 'react-navigation';


import WriteReviewScreen from './screens/WriteReviewScreen';
import ReadStoryScreen from './screens/ReadReviewScreen';
import WelcomeScreen from './screens/welcomescreen'
import SignUpScreen from './screens/signupscreen'
import HomeScreen from './screens/homescreen'
import CarsScreen from './screens/carssreen'
import BrandScreen from './screens/brandscreen'
import TeslaScreen from './screens/teslascreen'

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer style={styles.container} />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Rev: {screen: ReadStoryScreen},
  Sig: {screen: SignUpScreen},
  Wel: {screen: WelcomeScreen},
  Read: {screen: ReadStoryScreen},
  Car: {screen: CarsScreen},
  Bran: {screen: BrandScreen},
  Tesla: {screen: TeslaScreen}
})

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

