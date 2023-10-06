import {
    StyleSheet,
    Text,
    View, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
  } from 'react-native';
import React from 'react';
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import NavBar from '../Widget/NavBar';
  
  
  function HomePage({ navigation }) {

    
    
      return (
          <View style={styles.container}>

            <View style={styles.footer}>
            <IconButton  onPress={() => navigation.navigate('TaskPage')} icon={props => <Icon  name="home" {...props} color="#FEFEFE"/>} />
            <IconButton  onPress={() => navigation.navigate('TaskPage')} icon={props => <Icon  name="checkbox-marked-circle-outline" {...props} color="#FEFEFE"/>} />
            <IconButton  onPress={() => navigation.navigate('TaskPage')} icon={props => <Icon  name="trello" {...props} color="#FEFEFE"/>} />
            <IconButton style={styles.btn}  onPress={() => navigation.navigate('TaskPage')} icon={props => <Icon  name="plus" {...props} color="#FEFEFE"/>} />
            </View>
              </View>
      );
  
  }
  
  const styles = StyleSheet.create({
      container: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        height: 844,
        backgroundColor: '#1C1C1C'
      
        },
        btn:{
            backgroundColor: '#EB5093',
            height: 44,
            width: 44,
            borderRadius: 50,
        },
        
        footer:{
            alignContent: "center"
,           marginTop: 750,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 357,
            backgroundColor: '#fff',
            paddingTop: 8,
            height: 60,
            marginLeft: 17,
            borderRadius: 30,
            backgroundColor: '#1C1C1C'
                
                
        
        },
  })
  
  export default HomePage