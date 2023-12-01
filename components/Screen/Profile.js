import { StatusBar } from 'expo-status-bar';
import { IconButton, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from 'react';
import { useHistory } from "react-dom";


import { StyleSheet, Text, Image, View, ScrollView, Button,Pressable, Alert, SafeAreaView, } from 'react-native';



function Profile({ navigation }) {
      
    const [userState, setUserState] = React.useState({});

    

    

  return (

    <View style={styles.container}>
        

        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>

        <Image style={styles.photo}/>

        <View style={styles.rec_one}>
          <Text style={styles.login}>Анастасия</Text>

          <Text style={styles.email}>karasik0401@mail.ru</Text>
        </View>
        
        <View style={styles.rec_t}>

          <View style={styles.group_big}>


            <Pressable style={styles.btn_exit} onPress={() => navigation.navigate('Sign_in')}>
            <Text style={styles.btn_text}>Выйти</Text>
            </Pressable>
          </View>

          

        </View>
        
        </ScrollView>

        

        
        
 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
    height: 844,
  }, 
  body:{
    zIndex: 1,
    
  },
  text:{
    fontSize: 18,
    color: '#A3A6AA',
    marginTop: 20,
    marginLeft: 16,

  },
  group_big:{
    marginTop: 0,
  },

  rec_one:{
    marginTop: -50,
    backgroundColor: "#1C1C1C",
    width: 390,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height:142,
  },
  rec_t:{
    marginTop: -50,
    width: 390,
    backgroundColor: "#252525",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: 324,
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center'
  },

  group:{
    display: 'flex',
    flexDirection: "row",
    width: 283,
    marginLeft: 52,
    marginBottom: 21,

    
  },

  photo:{
    backgroundColor:"#828282",
    width:390,
    height: 481,
    zIndex: 0,
    
  },

  login:{
    marginTop: 16,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 26,
    lineHeight: 31,
    marginBottom:8,
    color:"#FEFEFE",
    alignSelf: "center"
  },
  email:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 17,
    lineHeight: 21,
    color: '#A3A6AA',
    marginBottom:30,
    alignSelf: "center"
  },

  btn:{
    width:50,
    height:50,
    borderRadius: 17,
    borderWidth:2,
    borderColor: "#CDDCA1",
  },

  icon:{
    alignSelf: 'center',
    marginLeft: 2,
    marginBottom: 2,
    transform: [{ rotate: '-90deg'}]
},
  btn_exit: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 94,
    height: 30,
    borderRadius: 10, 
  },
  btn_text:{
    fontSize: 20,
    color: '#CDDCA1',
    paddingBottom: 5,
  },
  
})

export default Profile