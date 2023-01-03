import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Settings = ({ navigation: { goBack, reset } }) => {
  return (
    <>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          reset({
            index: 0,
            routes: [{ name: "Home" }],
          })
        }>
        <Text>Reset</Text>
      </TouchableOpacity>
    </>
  );
};

export default Settings;
