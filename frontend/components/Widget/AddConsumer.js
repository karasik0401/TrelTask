import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ScrollView,
    FlatList,
  } from "react-native";
  import React from "react";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  
  const data = [
    { id: 1, txt: "Петя", isChecked: false },
    { id: 2, txt: "Вася", isChecked: false },
    { id: 3, txt: "Саша", isChecked: false },
    { id: 4, txt: "Влад", isChecked: false },
    { id: 5, txt: "Петя", isChecked: false },
    { id: 6, txt: "Вася", isChecked: false },
    { id: 7, txt: "Саша", isChecked: false },
    { id: 8, txt: "Влад", isChecked: false },
  ];
  
  function AddConsumer({ route }) {
    const [products, setProducts] = React.useState(data);
  
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
              <View style={styles.card}>
                <Text style={styles.item}>{item.txt}</Text>
                <Pressable onPress={() => handleChange(item.id)}>
                  <MaterialCommunityIcons
                    name={item.isChecked ? "close-circle" : "plus-circle-outline"}
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
      <View style={styles.container}>
        <Text style={styles.title}>Назначить участника</Text>
        <View style={styles.line}></View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
          {renderFlatList(products)}
        </ScrollView>
        <View></View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      width: '100%',
    },
    body: {
      height: 200,
    },
  
    item:{
      fontSize: 16
    },
  
    card: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
      width: '100%'
    },
    line: {
      height: 1,
      backgroundColor: "#A3A6AA",
      marginBottom: 16,
      width: 312,
      alignSelf: 'center'
    },
    title: {
      fontSize: 18,
      alignSelf: "center",
      marginBottom: 16,
      marginTop: -16,
      color: "#A3A6AA"
    },
  });
  
  export default AddConsumer;
  