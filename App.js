// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, Link } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Views/Home/index';
import Sobre from './Views/Sobre/index';

function HomeScreen() {
  return (
    <Home />
  );
}

function SobreScreen() {
  return(
    <Sobre />
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Tab.Navigator screenOptions={{headerStyle: { backgroundColor:'#635ffc' }, headerTintColor: '#fff', flex: 1, headerTitleAlign: 'center'}}>
        <Tab.Screen name="homeScreen" component={HomeScreen} options={{ title: 'Início' }}/>
        <Tab.Screen name="sobreScreen" component={SobreScreen} options = {{ title: 'Sobre' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;