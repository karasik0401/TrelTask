import { StatusBar } from 'expo-status-bar';
import { IconButton, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from 'react';
import { useHistory } from "react-dom";
import * as ImagePicker from "expo-image-picker";


import { StyleSheet, Text, Image, View, ScrollView, Button,Pressable, Alert, SafeAreaView, } from 'react-native';



function Profile({ navigation }) {
      
    const [userState, setUserState] = React.useState({});
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
    

    

  return (

    <View style={styles.container}>
        

        <Image style={styles.photo}/>

        <View style={styles.rec_one}>
        {image && <Image source={{ uri: image }} style={styles.img} />}
          <Text style={styles.login}>Анастасия</Text>

          <Text style={styles.email}>#04</Text>

          <View style={styles.rec_t}>
            <Pressable style={styles.btn} onPress={pickImage}>
            <Text style={styles.btn_text}>Редактировать</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={() => navigation.navigate('FriendsPage')}>
            <Text style={styles.btn_text}>Друзья</Text>
            </Pressable>
        </View>

            <Pressable style={styles.btn_exit} onPress={() => navigation.navigate('Sign_in')}>
            <Text style={styles.btn_text_exit}>Выйти</Text>
            </Pressable>
        </View>
        
        
 

        

        
        
 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#CDDCA1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }, 
  body:{
    zIndex: 1,
    
  },
  rec_one:{
    height: 648+9,
    width:'100%',
    marginTop: 196,
    backgroundColor:"#1C1C1C",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  btn_exit:{
    marginTop: 283,
    alignSelf: "center",

  },

  btn_text_exit:{
    fontSize: 18,
    color:"#EB5093"
  },

  rec_t:{
    alignSelf: 'center',
    display: 'flex',
    alignContent: 'flex-start',
    height: 75,
    width: 287,
    marginTop: 47,

  },
  img:{
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: "#fff",
    marginTop: -117,
    alignSelf: "center"
  },

  login:{
    marginTop: 28,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 31,
    marginBottom:8,
    color:"#FEFEFE",
    alignSelf: "center"
  },
  email:{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 21,
    color: '#A3A6AA',
    alignSelf: "center"
  },

 

  icon:{
    alignSelf: 'center',
    marginLeft: 2,
    marginBottom: 2,
    transform: [{ rotate: '-90deg'}]
},
  btn: {
    marginBottom: 27,
  },
  btn_text:{
    fontSize: 20,
    color: '#F2F3F3',
    paddingBottom: 5,
  },
  
})

export default Profile