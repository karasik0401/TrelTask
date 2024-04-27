import {
    StyleSheet,
    Text,
    View,
    Modal,
    Pressable,
    ScrollView,
    FlatList,
  } from "react-native";
  import React, { useState } from "react";
  import { Stack, IconButton } from "@react-native-material/core";
  import Icon from "@expo/vector-icons/MaterialCommunityIcons";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import AddCheckPoint from "./AddCheckPoint";
  
  const data = [
    { id: 1, txt: "Найти аналоги", isChecked: false },
    { id: 2, txt: "Создать прототип", isChecked: false },
    { id: 3, txt: "Накинуть дизайн", isChecked: false },
  ];
  
  function AddCheckList({ route }) {
    const [products, setProducts] = React.useState(data);
    const [modalVisibleCheckList, setModalVisibleCheckList] = useState(false);

  
    const handleChange = (id) => {
      let temp = products.map((product) => {
        if (id === product.id) {
          return { ...product, isChecked: !product.isChecked };
        }
        return product;
      });
      setProducts(temp);
    };
  
    let selected = products.filter((product) => product.isChecked);
  
    const renderFlatList = (renderData) => {
      return (
        <FlatList
          style={styles.container}
          data={renderData}
          renderItem={({ item }) => (
            <View style={{ margin: 0 }}>
              <View style={styles.row_check}>
                <Text style={styles.check_title}>{item.txt}</Text>
                <Pressable onPress={() => handleChange(item.id)}>
                  <MaterialCommunityIcons
                    name={
                      item.isChecked
                        ? "checkbox-marked-circle-outline"
                        : "checkbox-blank-circle-outline"
                    }
                    size={28}
                    color="#EB5093"
                  />
                </Pressable>
              </View>
            </View>
          )}
        />
      );
    };
  
    return (
      <View style={styles.checkbox}>
        <View style={styles.checkbox_bigrow}>
          <View style={styles.checkbox_row}>
            <IconButton
              style={styles.icon_chb}
              icon={(props) => (
                <Icon
                  name="checkbox-marked-circle-outline"
                  {...props}
                  color="#EB5093"
                />
              )}
            />
            <Text style={styles.check_title}>Чек-лист</Text>
          </View>
          <IconButton
            style={styles.icon_chb}
            onPress={() => setModalVisibleCheckList(true)}
            icon={(props) => (
              <Icon
                name="plus-circle-outline"
                {...props}
                size={28}
                color="#1C1C1C"
              />
            )}
          />
        </View>
  
        {renderFlatList(products)}
  
        <View></View>
        <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisibleCheckList}
                        
                      >
                        <View style={styles.centeredView}>
                          <View style={styles.mod}>
                            <AddCheckPoint />

                          </View>
                          <Pressable
                              style={[styles.buttonAdd, styles.buttonCloseAdd]}
                              onPress={() => setModalVisibleCheckList(!modalVisibleCheckList)}
                            >
                              <Text style={styles.textStyleAdd}>Добавить</Text>
                            </Pressable>
                        </View>
                      </Modal>
      </View>

      
    );
  }
  
  const styles = StyleSheet.create({
    mod:{
        marginTop: 250,
        marginHorizontal: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    buttonAdd: {
        borderRadius: 20,
        paddingVertical: 16,
        marginHorizontal: 40,
        marginTop: 24,
      },
      buttonOpenAdd: {},
      buttonCloseAdd: {
        backgroundColor: "#fff",
      },
      textStyleAdd: {
        color: "#333",
        fontWeight: "bold",
        textAlign: "center",
      },
  
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width: 80,
      height: 30,
    },
    buttonOpen: {
      backgroundColor: "#7BB558",
    },
    buttonCloseGreen: {
      backgroundColor: "#7BB558",
      marginBottom: 8,
    },
    buttonCloseRed: {
      backgroundColor: "#E55050",
      marginBottom: 8,
    },
    buttonCloseOrange: {
      backgroundColor: "#ED863B",
      marginBottom: 8,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  
    row_check: {
      marginTop: 16,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  
    check_title: {
      fontSize: 16,
      fontWeight: 500,
    },
  
    checkbox: {
      marginTop: 32,
      backgroundColor: "#CDDCA1",
      paddingTop: 24,
      paddingBottom: 24,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 30,
    },
  
    checkbox_bigrow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  
    checkbox_row: {
      display: "flex",
      flexDirection: "row",
    },
  
    check_title: {
      fontSize: 18,
      fontWeight: 600,
      color: "#1C1C1C",
  
      marginLeft: 8,
    },
  
    icon_chb: {
      width: 30,
      height: 30,
    },
  
    icon_title: {
      width: 26,
      height: 26,
      borderRadius: 50,
      backgroundColor: "#8CA5AD",
    },
  });
  
  export default AddCheckList;
  