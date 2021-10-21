import React, { useState } from "react";
import { Text, FlatList } from "react-native";
import UserDetail from "./UserDetail";

export default function UserList({ users, refreshing, refereshUsers }) {
  const renderUser = ({ item }) => {
    return <UserDetail user={item} />;
  };

  if (!users) {
    return <Text>No user available now</Text>;
  }

  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={refereshUsers}
      data={users}
      renderItem={renderUser}
      keyExtractor={(item) => item.cell}
      showsVerticalScrollIndicator={false}
    />
  );
}
