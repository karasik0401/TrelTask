import {
  StyleSheet,
  Text,
  View, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import React from 'react';
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


function TaskPage({ route }) {
    const [number, onChangeNumber] = React.useState('');
  
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
            <View style={styles.task}>
                
                <View style={styles.header}>
                <IconButton style={styles.icon_footer} icon={props => <Icon  name="close-circle" {...props} color="#8CA5AD"/>} /> 
                 <Text style={styles.text_btitle}>Создание UX/UI</Text>
                 <IconButton style={styles.icon_footer} icon={props => <Icon  name="arrow-up-circle" {...props} color="#8CA5AD"/>} /> 
               </View>
               <Text style={styles.text_option}>Сделать прототип приложения и создать дизайн. Подобрать цвета, элементы. Подготовить макет к верстке.</Text>
               <View style={styles.checkbox}>
                    <View style={styles.checkbox_header}>
                        <View style={styles.row}>
                        <IconButton style={styles.icon_footer} icon={props => <Icon  name="checkbox-marked-circle-outline" {...props} color="#8CA5AD"/>} /> 
                            <Text style={styles.text_title}>Чек-Лист</Text>
                        </View>
                           
                        <IconButton style={styles.icon_footer} icon={props => <Icon  name="plus-circle-outline" {...props} color="#8CA5AD"/>} /> 
                    </View>
                    <View style={styles.checkbox_list}>
                        <View style={styles.checkbox_row}>
                            <Text style={styles.text_chbox}>Найти аналоги</Text>
                            <IconButton style={styles.icon_chb}  icon={props => <Icon   name="checkbox-marked-circle-outline" {...props} color="#8CA5AD"/>} /> 
                            
                        </View>
                        <View style={styles.checkbox_row}>
                            <Text style={styles.text_chbox}>Создать прототип</Text>
                            <IconButton style={styles.icon_chb}  icon={props => <Icon   name="checkbox-marked-circle-outline" {...props} color="#8CA5AD"/>} /> 
                        </View>
                        <View style={styles.checkbox_row}>
                            <Text style={styles.text_chbox}>Накинуть дизайн</Text>
                            <IconButton style={styles.icon_chb}  icon={props => <Icon  name="checkbox-blank-circle-outline" {...props} color="#8CA5AD"/>} />  
                        </View>
                    </View>

                


               </View>
               <View style={styles.optionat_row}>
                    <View style={styles.icon}></View>
                    <Text style={styles.text_chbox}>01.05.24</Text>

                </View>
                <View style={styles.optionat_row}>
                    <View style={styles.icon}></View>
                    <View style={styles.mark}></View>

                </View>
                <View style={styles.optionat_row}>
                    <View style={styles.icon}></View>
                    <View style={styles.member}></View>

                </View>

                <View style={styles.optionat_row}>
                    <View style={styles.icon}></View>
                    <Text style={styles.file_titile}>Функциональные требования</Text>

                </View>
            </View>
            </ScrollView>
            

            <KeyboardAvoidingView behavior="padding" style={styles.screen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.footer}> 
                    <IconButton style={styles.icon_footer}  icon={props => <Icon  name="paperclip" {...props} color="#8CA5AD"/>} />
                    <View>
                        <TextInput
                        style={styles.put_txt}
                        placeholder="Ваше мнение?"
                        />
                        </View> 
                        <IconButton style={styles.icon_footer} icon={props => <Icon  name="arrow-up-circle" {...props} color="#8CA5AD"/>} /> 

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
                
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 844,
        backgroundColor: '#8CA5AD'
    
      },
      put_txt:{
        fontSize: 16,
        borderColor: '#C2C2C2',
        borderWidth: 1,
        height: 30,
        borderRadius: 10,
        backgroundColor: "#fff",
        width: 294,
        alignContent: 'center',
      },

      footer:{
        position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 390,
            marginTop: -80,
            backgroundColor: '#FAFEFF',
            paddingTop: 8,
            height: 80,
    
    },

        icon_footer:{
        width: 30,
        height: 30,
        borderRadius: 50,

      },

      task:{
        width: 354,
        height: 'maxContetnt',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 62,
        backgroundColor: '#FAFEFF',
        borderRadius: 30,

      },

      header:{
        width: 322,
        display: 'flex',
        flexDirection: 'row',
        alignSelf:'center',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 24, 


      },

      icon:{
        width: 24,
        height: 24,
        borderRadius: 50,
        backgroundColor: '#8CA5AD',
        marginRight: 16
      },
      icon_chb:{
        width: 30,
        height: 30,
        marginLeft: -50

      },
      icon_title:{
        width: 26,
        height: 26,
        borderRadius: 50,
        backgroundColor: '#8CA5AD',
        
      },

      checkbox:{
        width: 326,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 14,
        backgroundColor: '#F0F0F0',
        borderRadius: 14,
        marginTop: 24,
        marginBottom: 24,

      },

      checkbox_header:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 12,
        width: 300,
        marginLeft: 13,
        justifyContent: 'space-between',
        
        
        
      },

      checkbox_list:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 16,


      },

      checkbox_row:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 16,
        marginLeft: 12,
        width: 302,
        justifyContent: 'space-between',

      },

      text_option:{
        fontSize: 16,
        width: 322,
        alignSelf: 'center',
        color: '#333',
        fontWeight: '400',

      },

      text_title:{
        fontSize: 18,
        alignSelf: 'center',
        color: '#333',
        fontWeight: '500',

      },

      row:{
        display: 'flex',
        flexDirection: 'row',
        width: 114,
        justifyContent: 'space-between'
      },

      text_chbox:{
        fontSize: 16,
        width: 322,
        alignSelf: 'center',
        color: '#333',
        fontWeight: '400',

      },

      text_btitle:{
        fontSize: 18,
        color: '#333',
        fontWeight: '500',

      },

      optionat_row:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 16,
        marginLeft: 33.5,
        marginBottom: 16,
        width: 287,


      },

      mark:{
        width: 71,
        height: 22,
        borderRadius: 12,
        backgroundColor: '#7BB558'
      },

      file_titile:{
        fontSize: 16,
        width: 245,
        alignSelf: 'center',
        color: '#333',
        fontWeight: '400',
      },

      member:{
        width: 24,
        height: 24,
        borderRadius: 50,
        backgroundColor: '#8CA5AD'
      },












})

export default TaskPage