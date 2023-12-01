import {
    StyleSheet,
    Text,
    View, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity
  } from 'react-native';
import React from 'react';
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import NavBar from '../Widget/NavBar';
import CardBoard_home from '../Widget/CardBoard_home';
import CardTask_home from '../Widget/CardTask_home';
  
  
  function HomePage({ navigation }) {

    
    
      return (
          <View style={styles.container}>

          <ScrollView showsVerticalScrollIndicator={false} style={styles.bigscroll}>

              <View style={styles.header}>
                <View style={styles.header_row}>
                  <IconButton style={styles.icon_header} onPress={() => navigation.navigate('TaskPage')}  icon={props => <Icon   name="home" {...props} color="#FEFEFE"/>} />
                  <Text style={styles.title}>Главная</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <IconButton style={styles.icon_header}  icon={props => <Icon   name="account" {...props} color="#FEFEFE"/>} />
                </TouchableOpacity>
                
              </View>

              <Text style={styles.h2}>Твои доски</Text>
            
            <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true} style={styles.body}>
              
              <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
                <CardBoard_home/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
                <CardBoard_home/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
                <CardBoard_home/>
              </TouchableOpacity>

              
            
            </ScrollView>

            <Text style={styles.h2}>Твои задачи</Text>

            <View style={styles.tasks}>
              <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
                <CardTask_home />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
                <CardTask_home />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
              <CardTask_home />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('TaskPage')}>
                <CardTask_home />
              </TouchableOpacity>
              
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
        alignItems: 'center',
        height: 844,
        backgroundColor: '#1c1c1c'
    
      
        },

        header:{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 53,
          width: 342,
          justifyContent: 'space-between',
          marginLeft: 24
        },
  
        header_row:{
          display: 'flex',
          flexDirection: 'row',
        },

        icon_header:{
          width: 30,
          height: 30, 
  
        },
  
        title:{
          fontSize: 24,
          fontWeight: 600,
          color: '#FEFEFE',
          marginLeft: 12,
        },

        h2:{
          color: '#FEFEFE',
          fontSize: 18,
          fontWeight: 600,
          marginLeft: 24,
          marginTop: 31,
        },

        tasks:{
          display:"flex",
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 110,

        },

        body:{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 24,
          paddingLeft: 24,
        },

        card:{
          marginRight: 16,
        },

        

        
  })
  
  export default HomePage