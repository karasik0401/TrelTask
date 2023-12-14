import * as React from 'react'
import { StyleSheet, Text, Image, View,Button,Pressable, Alert, SafeAreaView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import TaskPage from '../components/Screen/TaskPage'
import HomePage from '../components/Screen/HomePage';
import NavBar from '../components/Widget/NavBar';
import CardBoard_home from '../components/Widget/CardBoard_home';
import CardTask_home from '../components/Widget/CardTask_home';
import Sign_up from '../components/Screen/Sign_up';
import Sign_in from '../components/Screen/Sign_in';
import Profile from '../components/Screen/Profile';
import Camera from '../components/Screen/Camera';
import BoardPage from '../components/Screen/BoardPage';
import BoardList from '../components/Widget/BoardList';
import CardTask_board from '../components/Widget/CardTask_board';



const Stack = createStackNavigator()

function MainStackNavigator() {

  
  return (
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen
          name='Sign_in'
          component={Sign_in}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
    <Stack.Screen
          name='Camera'
          component={Camera}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />
    <Stack.Screen
        name='CardTask_board'
        component={CardTask_board}
        options={{title: ' ',
        headerShown: false,
        headerLeft: () => null,}}
        />

    <Stack.Screen
          name='BoardPage'
          component={BoardPage}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />

    <Stack.Screen
          name='BoardList'
          component={BoardList}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />

    <Stack.Screen
          name='Sign_up'
          component={Sign_up}
          options={{title: ' ',
          headerShown: false,
          headerLeft: () => null,}}
        />

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
          name='Profile'
          component={Profile}
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