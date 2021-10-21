import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { userAPI } from "./src/api/users";
import UserList from "./src/components/UserList";

export default function App() {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setRefresh(true);
    try {
      console.log(userAPI.getUri);
      const response = await userAPI.get(
        "https://randomuser.me/api/?results=20"
      );
      setUsers(response.data.results);
      setRefresh(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Connect with Random People on Internet
          {refresh}
        </Text>
      </View>
      <View style={styles.userContainer}>
        <UserList
          refreshing={refresh}
          refereshUsers={() => getUsers()}
          users={users}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingContainer: {
    marginTop: 50,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    color: "#fff",
  },
  userContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
