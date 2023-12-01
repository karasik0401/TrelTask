import {
  StyleSheet,
  Text,
  View,  Modal, ScrollView, Image, FlatList, Alert, TextInput, Pressable, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { CheckBox } from '@rneui/themed';
import React, {useState} from 'react';
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import CheckList from '../Widget/CheckList';


function TaskPage({ navigation }) {
    const [number, onChangeNumber] = React.useState('');

    const [modalVisible, setModalVisible] = useState(false);
  
    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>

              <View style={styles.header}>
                <View style={styles.header_row}>
                  <IconButton style={styles.icon_header} onPress={() => navigation.navigate('HomePage')}  icon={props => <Icon   name="arrow-left-circle" {...props} color="#FEFEFE"/>} />
                  <Text style={styles.title}>Название задачи</Text>
                </View>
                
                <IconButton style={styles.icon_header}  icon={props => <Icon   name="dots-vertical" {...props} color="#FEFEFE"/>} />
              </View>

              <Text style={styles.discription}>Сделать прототип приложения и создать дизайн. Подобрать цвета, элементы. Подготовить макет к верстке.</Text>

              <CheckList/>

              <View style={styles.footerTask}>
                <View style={styles.footerTask_row}>
                <IconButton style={styles.icon_taskfooter}  icon={props => <Icon   name="calendar-month" {...props} color="#FEFEFE"/>} />
                <Text style={styles.fottxt}>01.05.24</Text>
                </View>

                <View style={styles.footerTask_row}>
                <IconButton style={styles.icon_taskfooter}  icon={props => <Icon   name="bookmark-outline" {...props} color="#FEFEFE"/>} />
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalText}>Выберите цвет метки</Text>
                      <Pressable
                        style={[styles.button, styles.buttonCloseGreen]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.textStyle}></View>
                      </Pressable>
                      <Pressable
                        style={[styles.button, styles.buttonCloseRed]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.textStyle}></View>
                      </Pressable>
                      <Pressable
                        style={[styles.button, styles.buttonCloseOrange]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.textStyle}></View>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={() => setModalVisible(true)}>
                  <View style={styles.textStyle}></View>
                </Pressable>
                </View>

                <View style={styles.footerTask_row}>
                <IconButton style={styles.icon_taskfooter}  icon={props => <Icon   name="account-plus-outline" {...props} color="#FEFEFE"/>} />
                
                </View>

                <View style={styles.footerTask_row}>
                <IconButton style={styles.icon_taskfooter}  icon={props => <Icon   name="file-document-outline" {...props} color="#FEFEFE"/>} />
                <Text style={styles.fottxt}>01.05.24</Text>
                </View>
              </View>

              

            </ScrollView>
            

            <KeyboardAvoidingView behavior="padding" style={styles.screen}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.footer}> 
                    <IconButton style={styles.icon_footer}  icon={props => <Icon  name="paperclip" {...props} color="#FEFEFE"/>} />
                    <View>
                        <TextInput
                        style={styles.put_txt}
                        placeholder="Ваше мнение?"
                        />
                        </View> 
                        <IconButton style={styles.icon_footer} icon={props => <Icon  name="arrow-up-circle" {...props} color="#FEFEFEb"/>} /> 

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
        backgroundColor: '#1C1C1C'
    
      },

      fottxt:{
        fontSize: 16,
        color: "#FEFEFE",
        marginTop: 4,
      },

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

      footerTask:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 32,

      },

      footerTask_row:{
        display: 'flex',
        flexDirection: 'row', 
        marginBottom: 18,
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

      discription:{
        width: 342,
        marginTop: 32,
        color: '#FEFEFE',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 24,

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

      put_txt:{
        fontSize: 16,
        borderColor: '#C2C2C2',
        borderWidth: 1,
        height: 30,
        borderRadius: 10,
        backgroundColor: "#fff",
        width: 294,
        alignContent: 'center',
        paddingLeft: 8,
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
            backgroundColor: '#1C1C1C',
            paddingTop: 8,
            height: 80,
    
    },

        icon_footer:{
        width: 30,
        height: 30,
        borderRadius: 50,

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

      icon_chb:{
        width: 22,
        height: 22,

      },

      icon_taskfooter:{
        width: 30,
        height: 30,
        marginRight: 12,

      },
      icon_title:{
        width: 26,
        height: 26,
        borderRadius: 50,
        backgroundColor: '#8CA5AD',
        
      },

})

export default TaskPage