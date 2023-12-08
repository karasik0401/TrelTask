import {
    StyleSheet,
    Text,
    View,  Modal, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
  } from 'react-native';
  import { CheckBox } from '@rneui/themed';
  import React, {useState} from 'react';
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  
  import BoardList from '../Widget/BoardList';
  
  
  function BoardPage({ navigation }) {
      const [number, onChangeNumber] = React.useState('');
  
      const [modalVisible, setModalVisible] = useState(false);
    
      return (
          <View style={styles.container} >
              <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
  
                <View style={styles.header}>
                  <View style={styles.header_row}>
                    <IconButton style={styles.icon_header} onPress={() => navigation.navigate('HomePage')}  icon={props => <Icon   name="arrow-left-circle" {...props} color="#FEFEFE"/>} />
                    <Text style={styles.title}>I remember</Text>
                  </View>
                  
                  <IconButton style={styles.icon_header}  icon={props => <Icon   name="dots-vertical" {...props} color="#FEFEFE"/>} />
                </View>

                <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true} style={styles.body}>
                <View style={styles.comand}>
                <IconButton style={styles.icon_comand} onPress={() => navigation.navigate('HomePage')}  icon={props => <Icon   name="plus" {...props} color="#1C1C1C"/>} />
                <View style={styles.person}>
                    <View style={styles.img}></View>
                    <Text style={styles.name}>Анастасия</Text>
                </View>
                <View style={styles.person}>
                    <View style={styles.img}></View>
                    <Text style={styles.name}>Максим</Text>
                </View>
                </View>

                </ScrollView> 

                <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true} style={styles.body}>
                <View style={styles.list}>
                <IconButton style={styles.icon_list} onPress={() => navigation.navigate('HomePage')}  icon={props => <Icon   name="plus" {...props} color="#FEFEFE"/>} />
                <View style={styles.item_on}>
                    <Text style={styles.title_list}>Документация</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title_list}>Дизайн</Text>
                </View>
                </View>

                </ScrollView>
  
                
                
                <BoardList/>


  
  
   
  
                
  
              </ScrollView>
              
  
             
                  
          </View>
      );
  
  }
  
  const styles = StyleSheet.create({
      container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: 844,
          backgroundColor: '#1C1C1C'
      
        },

         icon_comand:{
            width: 30,
          height: 30,
          marginTop: 7,
          backgroundColor: "#fefefe"


        },

        icon_list:{
            width: 30,
            height: 30,
            marginTop: 0,
            backgroundColor: "#EB5093"
        },

        img:{
            width:30,
            height: 30,
            backgroundColor: "#fff",
            borderRadius: 100,
            marginLeft: 12,
            marginBottom:4,
            marginTop: 4,
            marginRight: 4,

        },
        item_on:{
            display:"flex",
            flexDirection:"row",
            height: 30,
            borderRadius: 15,
            borderColor: "#EB5093",
            borderWidth: 1,
            alignContent:"center",
            marginLeft:8,
            backgroundColor:"#EB5093"
        },

        title_list:{
            fontSize: 18,
            color: "#fefefe",
            marginBottom:4,
            marginTop: 2,
            marginRight: 12,
            marginLeft: 12,
        },

        item:{
            display:"flex",
            flexDirection:"row",
            height: 30,
            borderRadius: 15,
            borderColor: "#EB5093",
            borderWidth: 1,
            alignContent:"center",
            marginLeft:8,

        },

        list:{
            display: 'flex',
            flexDirection: "row",
            marginTop:12,
        },

        name:{
            fontSize: 18,
            color: "#fefefe",
            marginBottom:8,
            marginTop: 8,
            marginRight: 12,
        },

        person:{
            display:"flex",
            flexDirection:"row",
            height: 40,
            borderRadius: 15,
            borderColor: "#fefefe",
            borderWidth: 1,
            alignContent:"center",
            marginLeft:8,

        },

        comand:{
            display: 'flex',
            flexDirection: "row",
            marginTop:25,
        },
  

        header:{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 53,
          width: 342,
          justifyContent: 'space-between'
        },
  
        header_row:{
          display: 'flex',
          flexDirection: 'row',
        },
  
        title:{
          fontSize: 24,
          fontWeight: 600,
          color: '#FEFEFE',
          marginLeft: 12,
        },     
  
        icon:{
          width: 24,
          height: 24,
          borderRadius: 50,
          backgroundColor: '#FEFEFE',
  
        },
        icon_header:{
          width: 30,
          height: 30, 
  
        },
  
   
  
  })
  
  export default BoardPage