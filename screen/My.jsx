import { View, Text, useColorScheme } from "react-native";
import React from "react";
import { DARK_COLOR, LIGHT_COLOR } from "../color";

const My = () => {
  const isDark = useColorScheme();
  return (
    <View>
      <Text style={{ color: isDark ? DARK_COLOR : LIGHT_COLOR }}>My</Text>
    </View>
  );
};

export default My;
