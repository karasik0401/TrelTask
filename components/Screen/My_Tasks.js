import {
    StyleSheet,
    Text,
    View, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, SafeAreaView
  } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";
import React from 'react';
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import NavBar from '../Widget/NavBar';
import CardTask_home from '../Widget/CardTask_home';
  
  
  function My_Tasks({ navigation }) {

    
    
      return (
          <View style={styles.container}>

            <View style={styles.header}>
                  <IconButton style={styles.icon_header}  icon={props => <Icon   name="checkbox-marked-circle-outline" {...props} color="#FEFEFE"/>} />
                  <Text style={styles.title}>Мои задачи</Text>               
            </View>

            <SafeAreaView >
            <Feather
                name="search"
                size={20}
                color='#ccc'
                style={{ marginLeft: 30,
                marginBottom: -35,
                marginTop: 16,
                zIndex: 1, }}
                />
                <TextInput placeholder='Поиск' clearButtonMode='always'
                        style={styles.search}
                        autoCapitalize="none"
                        autoCorrect={false}
                        />
            </SafeAreaView>

          <ScrollView showsVerticalScrollIndicator={false} style={styles.bigscroll}>


            <View style={styles.column}>
                <CardTask_home/>
            </View>

            </ScrollView>

           

              
            
            <View style={{position: 'absolute',
            height: 80,}}>
            <NavBar navigation={navigation}/>
            </View>
            

            
          </View>
      );
  
  }
  
  const styles = StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'column',
        height: 844,
        backgroundColor: '#1c1c1c'
    
      
        },
        search:{
            width:354,
            height:32,
            borderWidth:2,
            borderColor: '#ccc',
            borderRadius:16,
            marginTop:8,
            marginBottom: 8,
            alignSelf:"center",
            backgroundColor: "#fff",
            paddingLeft: 35,
        
          },

        header:{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 53,
          marginLeft: 24,
          verticalAlign: 'middle',
          justifyContent: 'flex-start'
        },
  
        header_row:{
          display: 'flex',
          flexDirection: 'row',
        },
        column:{
            display:"flex",
            flexDirection:"column",
            alignSelf:"center"

        },

        icon_header:{
          width: 40,
          height: 40,
          marginRight: 14, 
  
        },
  
        title:{
          fontSize: 24,
          fontWeight: 600,
          color: '#FEFEFE',
          marginLeft: -10,
          marginTop: 5,
        },


        

        
  })
  
  export default My_Tasks