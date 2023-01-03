import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Profile = ({ navigation: { navigate, setOptions } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigate("Settings")}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          setOptions({
            title: "제목변경",
          })
        }>
        <Text>Set Options</Text>
      </TouchableOpacity>
    </>
  );
};

export default Profile;
