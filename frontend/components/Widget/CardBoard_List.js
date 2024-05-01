import {
    StyleSheet,
    Text,
    View, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
  } from 'react-native';
  import React from 'react';
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  
  
  function CardBoard_List({ route }) {

        
      return (
          <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>I remember</Text>
            </View>

            <View style={styles.disc}>
            <Icon style={styles.icon_chb}
        name='trello'
        color='#252525'
        size={18} />
                <Text style={styles.txt}>6</Text>
                <Icon style={styles.icon_chb}
        name='checkbox-marked-circle-outline'
        color='#252525'
        size={18} />
                <Text>45</Text>
            </View>

            <View style={styles.row}>
            <View style={styles.row_circl}>
                <View style={styles.circl}></View>
                <View style={styles.circl}></View>
                <View style={styles.circl}></View>
                <View style={styles.circl}></View>
            </View>

            <View style={styles.procent}>
                <View style={styles.circl_min}>
                    <Text style={styles.procent_txt}>42</Text>
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
          width:342,
          height: 145,
          backgroundColor: '#CDDCA1',
          borderRadius: 30,
          padding: 16,
          marginTop: 29
        },

        title:{
            fontSize: 20,
            fontWeight: 600,
            color: '#1C1C1C'

        },

        row_circl:{
            display: 'flex',
            flexDirection: 'row',
        },

        disc:{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 8,
            height: 15,
            alignItems: 'center'

        },

        icon_chb:{
            marginRight: 8,
            height: 15,
            width: 15,
        },

        txt:{
            marginRight: 8,
            color: '#1C1C1C'
        },

        circl:{
            height: 30,
            width: 30,
            borderRadius: 30,
            borderColor: "#CDDCA1",
            borderWidth: 1,
            backgroundColor: '#000000',
            marginRight: -15,
            marginTop: 20

        },

        procent:{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: '#EB5093'
        },

        circl_min:{
            height: 26,
            width: 26,
            borderRadius: 50,
            backgroundColor: '#CDDCA1',
            alignSelf: 'center',
            marginTop: 12
        },

        procent_txt:{
            alignSelf: 'center',
            marginTop: 7,
            fontSize: 10,
            fontWeight: 500,
            color: '#1C1C1C'
        },

        row:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
        },
        
  })
  
  export default CardBoard_List