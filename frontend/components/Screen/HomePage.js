import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Alert,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import NavBar from "../Widget/NavBar";
import CardBoard_home from "../Widget/CardBoard_home";
import CardTask_home from "../Widget/CardTask_home";

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_row}>
          <IconButton
            style={styles.icon_header}
            onPress={() => navigation.navigate("HomePage")}
            icon={(props) => <Icon name="home" {...props} size={28} color="#FEFEFE" />}
          />
          <Text style={styles.title}>Главная</Text>
        </View>
        <IconButton
          style={styles.icon_header}
          onPress={() => navigation.navigate("Profile")}
          icon={(props) => <Icon name="account" {...props} size={28} color="#FEFEFE" />}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.bigscroll}>
        <Text style={styles.h2}>Твои доски</Text>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.body}
        >
          <TouchableOpacity onPress={() => navigation.navigate("BoardPage")}>
            <CardBoard_home />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("TaskPage")}>
            <CardBoard_home />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("TaskPage")}>
            <CardBoard_home />
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.h2}>Твои задачи</Text>

        <View style={styles.tasks}>
          <TouchableOpacity onPress={() => navigation.navigate("TaskPage")}>
            <CardTask_home />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("TaskPage")}>
            <CardTask_home />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("TaskPage")}>
            <CardTask_home />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("TaskPage")}>
            <CardTask_home />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={{ position: "absolute", height: 80 }}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: '100%',
    backgroundColor: "#1c1c1c",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 60,
    justifyContent: "space-between",
    verticalAlign: "middle",
    width: 393,
    height: 40,
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  header_row: {
    display: "flex",
    flexDirection: "row",
    gap: 16
  },

  icon_header: {
    width: 40,
    height: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: 600,
    color: "#FEFEFE",
    marginLeft: -10,
    marginTop: 5,
  },

  h2: {
    color: "#FEFEFE",
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 24,
    marginTop: 31-16,
  },

  tasks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 110,
  },

  body: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
    paddingLeft: 24,
  },

  card: {
    marginRight: 16,
  },
});

export default HomePage;
