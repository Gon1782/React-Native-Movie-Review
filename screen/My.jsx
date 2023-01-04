import { View, Text, useColorScheme } from "react-native";
import React from "react";

const My = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <View>
      <Text style={{ color: isDark ? "white" : "black" }}>My</Text>
    </View>
  );
};

export default My;
