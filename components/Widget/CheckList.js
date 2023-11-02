import {
    StyleSheet,
    Text,
    View, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
  } from 'react-native';
  import React from 'react';
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  
  
  function CheckList({ route }) {
    
      return (
              <View style={styles.checkbox}> 
                <View style={styles.checkbox_bigrow}>
                  <View style={styles.checkbox_row}>
                    <IconButton style={styles.icon_chb}  icon={props => <Icon   name="checkbox-marked-circle-outline" {...props} color="#EB5093"/>} />
                    <Text style={styles.check_title}>Чек-лист</Text>
                  </View>
                  <IconButton style={styles.icon_chb}  icon={props => <Icon   name="plus-circle-outline" {...props} color="#1C1C1C"/>} />
                </View>

                <View style={styles.row_check}>
                  <Text style={styles.check_title}>Найти аналоги</Text>
                  <IconButton style={styles.icon_chb}  icon={props => <Icon   name="checkbox-marked-circle-outline" {...props} color="#EB5093"/>} />
                </View>

                <View style={styles.row_check}>
                  <Text style={styles.check_title}>Создать прототип</Text>
                  <IconButton style={styles.icon_chb}  icon={props => <Icon   name="checkbox-marked-circle-outline" {...props} color="#EB5093"/>} />
                </View>

                <View style={styles.row_check}>
                  <Text style={styles.check_title}>Накинуть дизайн</Text>
                  <IconButton style={styles.icon_chb}  icon={props => <Icon   name="checkbox-blank-circle-outline" {...props} color="#EB5093"/>} />
                </View>
              </View>
          
      );
  
  }
  
  const styles = StyleSheet.create({
    

      modalView: {
        marginTop: 420,
        alignSelf: 'center',
        width: 180,
        height: 180,
        backgroundColor: '#FEFEFE',
        borderRadius: 30,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

      

      
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 80,
        height: 30,
      },
      buttonOpen: {
        backgroundColor: '#7BB558',
      },
      buttonCloseGreen: {
        backgroundColor: '#7BB558',
        marginBottom: 8,
      },
      buttonCloseRed: {
        backgroundColor: '#E55050',
        marginBottom: 8,
      },
      buttonCloseOrange: {
        backgroundColor: '#ED863B',
        marginBottom: 8,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

      row_check:{
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      check_title:{
        fontSize: 16,
        fontWeight: 500,
      },

      checkbox:{
        marginTop: 32,
        backgroundColor: '#CDDCA1',
        paddingTop: 24,
        paddingBottom: 24,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 30,
      },

      checkbox_bigrow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

      },

      checkbox_row:{
        display: 'flex',
        flexDirection: 'row',

      },

      check_title:{
        fontSize: 18,
        fontWeight: 600,
        color: "#1C1C1C",
        
        marginLeft: 8, 
      },

      
      

      icon_chb:{
        width: 22,
        height: 22,

      },

      icon_title:{
        width: 26,
        height: 26,
        borderRadius: 50,
        backgroundColor: '#8CA5AD',
        
      },
        
  })
  
  export default CheckList