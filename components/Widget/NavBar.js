import {
    StyleSheet,
    Text,
    View, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
  } from 'react-native';
import React from 'react';
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

  
  
  function NavBar({ navigation }) {

    
    
      return (
          <View style={styles.container}>
              <IconButton style={styles.btn} onPress={() => navigation.navigate('TaskPage')} icon={props => <Icon name="plus" {...props} color="#f9b924"/>} />
              <IconButton style={styles.btn} onPress={() => navigation.navigate('TaskPage')} icon={props => <Icon name="account" {...props} color="#f9b924"/>} />
          </View>
      );
  
  }
  
  const styles = StyleSheet.create({
      container: {
          display: 'flex',
          flexDirection: 'row',
      
        },
        
  })
  
  export default NavBar