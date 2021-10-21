import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function UserDetail({ user }) {
  if (!user) {
    return <Text style={{ color: "red" }}>N/A</Text>;
  }

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: user.picture.medium }} />
      </View>
      <View style={styles.userContainer}>
        <Text
          style={styles.heading}
        >{`${user.name.first} ${user.name.last}`}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Country: {user.location.country}</Text>
        <Text>Age: {user.dob.age}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  userContainer: {
    marginLeft: 20,
  },
  heading: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
  },
});
