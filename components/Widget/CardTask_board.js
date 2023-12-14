import {
    StyleSheet,
    Text,
    View, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity
  } from 'react-native';
  import React from 'react';
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";

  
  
  
  function CardTask_board({ route }) {
    
      return (
          <View style={styles.container} >
            
            <View style={styles.header}>
                <Text style={styles.title}>Прописать пользовательские требования</Text>
                <View style={styles.check}></View>
            </View>

            
            <View style={styles.row}>
            <View style={styles.img}></View>
            <View style={styles.column}>
            <View style={styles.date}>
                <Text style={styles.date}>08.11.23</Text>
            </View>

            <View style={styles.line}>
                
                
            </View>
            </View>
            </View>
            
            

              
          </View>
      );
  
  }
  
  const styles = StyleSheet.create({
      container: {
          display: 'flex',
          flexDirection: 'column',
          width:311,
          backgroundColor: '#252525',
          borderColor: '#828282',
          borderWidth: 1,
          borderRadius: 30,
          paddingRight: 12,
          paddingLeft: 12,
          paddingVertical: 24,

          marginTop: 26,
        },

        title:{
            fontSize: 16,
            fontWeight: '500',
            color: '#FEFEFE'

        },
        header:{
            display:"flex",
            flexDirection: "row",
            justifyContent: 'space-between'
        },

        check:{
            width: 30,
            height:30,
            borderRadius: 100,
            borderWidth: 1,
            borderColor:"#FEFEFE"
        },

        date:{
            color: '#FEFEFE',
            fontSize: 12,
            fontWeight: 400,
        },

        line:{
            width: 47,
            height: 10,
            backgroundColor: '#E55050',
            borderRadius: 15,
        },

        img:{
            width: 24,
            height:24,
            borderRadius: 100,
            backgroundColor:"#fefefe"
        },

        row:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
        },

        column:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        
  })
  
  export default CardTask_board