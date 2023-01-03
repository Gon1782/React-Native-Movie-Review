import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Notifications = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Profile")}>
      <Text>Notifications</Text>
    </TouchableOpacity>
  );
};

export default Notifications;
