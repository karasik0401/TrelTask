import * as React from 'react'
import { StyleSheet, Text, Image, View,Button,Pressable, Alert, SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TaskPage from '../components/Screen/TaskPage'


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
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainStackNavigator