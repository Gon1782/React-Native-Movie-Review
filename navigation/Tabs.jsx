import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import My from "../screen/My";
import { useColorScheme } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator sceneContainerStyle={{ backgroundColor: isDark ? "black" : "white" }} screenOptions={{ headerTitleAlign: "center", tabBarLabelPosition: "beside-icon", tabBarActiveTintColor: isDark ? "red" : "skyblue" }}>
      <Tab.Screen
        options={{
          title: "영화",
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => <MaterialIcons name="movie" size={size} color={color} />,
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: "마이페이지",
          tabBarLabel: "Mypage",
          tabBarIcon: ({ color, size }) => <MaterialIcons name="list-alt" size={size} color={color} />,
        }}
        name="My"
        component={My}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
