import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Detail from "../screen/Detail";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  const { goBack } = useNavigation();
  const isDark = useColorScheme() === "dark";

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: isDark ? "white" : "black",
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ color: isDark ? "white" : "black" }}>뒤로</Text>
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Stacks;
