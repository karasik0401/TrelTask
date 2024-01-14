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
  
  
  function FriendsPage({ navigation }) {

    
    
      return (
          <View style={styles.container}>

            <View style={styles.header}>
                  <IconButton style={styles.icon_header}  icon={props => <Icon   name="account-group" {...props} color="#FEFEFE"/>} />
                  <Text style={styles.title}>Мои друзья</Text>               
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
               
                <View style={styles.big_row}>
                    <View style={styles.min_row}>
                        <View style={styles.img}></View>
                        <View style={styles.img}></View>
                        <View style={styles.img}></View>
                    </View>
                    <Text style={styles.min_title}>Заявки в друзья</Text>
                </View>

                <View style={styles.line}></View>

                <View style={styles.person}>
                    <View style={styles.name_img}>
                        <View style={styles.img}></View>
                        <Text style={styles.min_title}>Петров Борис</Text>
                    </View>
                    <IconButton style={styles.icon_persone}  icon={props => <Icon   name="close" {...props} color="#1C1C1C"/>} />
                </View>

                <View style={styles.person}>
                    <View style={styles.name_img}>
                        <View style={styles.img}></View>
                        <Text style={styles.min_title}>Баранова Василиса</Text>
                    </View>
                    <IconButton style={styles.icon_persone}  icon={props => <Icon   name="close" {...props} color="#1C1C1C"/>} />
                </View>

                <View style={styles.person}>
                    <View style={styles.name_img}>
                        <View style={styles.img}></View>
                        <Text style={styles.min_title}>Андреева Александра</Text>
                    </View>
                    <IconButton style={styles.icon_persone}  icon={props => <Icon   name="close" {...props} color="#1C1C1C"/>} />
                </View>

                <View style={styles.person}>
                    <View style={styles.name_img}>
                        <View style={styles.img}></View>
                        <Text style={styles.min_title}>Белов Пётр</Text>
                    </View>
                    <IconButton style={styles.icon_persone}  icon={props => <Icon   name="close" {...props} color="#1C1C1C"/>} />
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
        height: 844,
        backgroundColor: '#1c1c1c'
    
      
        },

        person:{
            display: 'flex',
            flexDirection:"row",
            justifyContent: "space-between",
            paddingHorizontal: 24,
            marginBottom: 22,
        },
        
        name_img:{
            display: 'flex',
            flexDirection:"row",
        },

        line:{
            height: 1,
            width: 390,
            backgroundColor: "#A3A6AA",
            marginTop: 16,
            marginBottom: 24,
        },

        min_title:{
            fontSize: 16,
            marginLeft: 36,
            marginTop: 10,
            color:"#fefefe"
        },

        big_row:{
            display: 'flex',
            flexDirection:"row",
            verticalAlign: 'middle',
            marginLeft: 24,
            marginTop: 24

        },

        min_row:{
            display: 'flex',
            flexDirection:"row",

        },

        img:{
            height: 40,
            width:40,
            backgroundColor: "#000",
            borderRadius: 100,
            borderColor: "#A3A6AA",
            borderWidth: 1,
            marginRight: -20
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
        icon_persone:{
            width: 24,
            height: 24, 
            backgroundColor: "#EB5093",
            marginTop: 8,
    
          },
  
        title:{
          fontSize: 24,
          fontWeight: 600,
          color: '#FEFEFE',
          marginLeft: -10,
          marginTop: 5,
        },


        

        
  })
  
  export default FriendsPage