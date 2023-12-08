import {
    StyleSheet,
    Text,
    View, ScrollView, TouchableOpacity, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
  } from 'react-native';
  import React from 'react';
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import CardTask_board from './CardTask_board';
  
  
  function BoardList({ navigation }) {
    
      return (
              <View style={styles.BoardList}> 
              
                <View style={styles.header}>
                <Text style={styles.header_text}>Документация</Text>
                <IconButton style={styles.icon_header}  icon={props => <Icon   name="checkbox-marked-circle-outline" {...props} color="#EB5093"/>} />
              </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>

                <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
                    <CardTask_board/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
                    <CardTask_board />
              </TouchableOpacity>
                    

                </ScrollView>

              
             
              </View>
          
      );
  
  }
  
  const styles = StyleSheet.create({
    
    BoardList:{
        backgroundColor: "#CDDCA1",
        width: 342,
        height: 549,
        marginTop: 29,
        borderRadius: 30,
        display: "flex",
        flexDirection: "column",
        
    },

    header:{
        display: "flex",
        flexDirection: "row",
        width: 342,
        justifyContent: "flex-end",
        marginTop: 16,
        alignItems: "center",
        height: 19,

    },
    body:{
        alignSelf: 'center'
    },

    header_text:{
        marginRight:67,
        fontSize: 16,
        color:"#1c1c1c",
        fontWeight: "600",
    },

    icon_header:{
    },
      
        
  })
  
  export default BoardList