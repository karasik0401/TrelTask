import * as React from 'react'
import { StyleSheet, Text, Image, View,Button,Pressable, Alert, SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TaskPage from '../components/Screen/TaskPage'
import HomePage from '../components/Screen/HomePage';
import NavBar from '../components/Widget/NavBar';
import CardBoard_home from '../components/Widget/CardBoard_home';
import CardTask_home from '../components/Widget/CardTask_home';


const Stack = createStackNavigator()

function MainStackNavigator() {

  
  return (
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen
          name='TaskPage'
          component={TaskPage}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
        
    <Stack.Screen
          name='HomePage'
          component={HomePage}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />



    <Stack.Screen
          name='NavBar'
          component={NavBar}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />

    <Stack.Screen
          name='CardBoard_home'
          component={CardBoard_home}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />


        <Stack.Screen
          name='CardTask_home'
          component={CardTask_home}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />

    
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainStackNavigator