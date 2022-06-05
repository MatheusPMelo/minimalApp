// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, Link } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Views/Home/index';
import Sobre from './Views/Sobre/index';
import Post from './Views/Post/posts';

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

function postsScreen() {
  return(
    <Post/>
  )
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <Tab.Navigator 
        screenOptions={{
          headerStyle: { 
            backgroundColor:'#2986CC'
          },

          tabBarActiveTintColor: '#fff',
          headerTintColor: '#fff', 
          flex: 1, 
          headerTitleAlign: 'center',

          tabBarStyle: {
            backgroundColor: '#2986CC',
          }
        }}
      >
        <Tab.Screen name="homeScreen" component={HomeScreen} options={{
            title: 'Início',
            tabBarLabel: 'Profile',
            
          }}/>

        <Tab.Screen name="sobreScreen2" component={SobreScreen} options = {{ title: 'Sobre' }} />
        <Tab.Screen name="posts" component={postsScreen} options = {{ title: 'Posts' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;