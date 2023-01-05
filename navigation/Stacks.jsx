import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, useColorScheme } from "react-native";
import Detail from "../screen/Detail";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import Login from "../screen/Login";
import { signOut } from "firebase/auth/react-native";

const NativeStack = createNativeStackNavigator();

const Stacks = () => {
  const { navigate, goBack, setOptions } = useNavigation();
  const isDark = useColorScheme() === "dark";

  const handleLogin = () => {
    if (!!auth.currentUser?.uid) {
      signOut(auth)
        .then(() => {
          console.log("로그아웃");
          setOptions({ headerRight: null });
        })
        .catch((err) => alert(err));
    } else {
      navigate("Login");
    }
  };

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: isDark ? "white" : "black",
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={{ color: isDark ? "white" : "black" }}>뒤로</Text>
          </TouchableOpacity>
        ),
        headerRight: () => {
          return (
            <TouchableOpacity onPress={() => handleLogin()}>
              <Text style={{ color: isDark ? "white" : "black" }}>{auth.currentUser ? "로그아웃" : "로그인"}</Text>
            </TouchableOpacity>
          );
        },
      }}>
      <NativeStack.Screen name="Detail" component={Detail} />
      <NativeStack.Screen name="Login" component={Login} />
    </NativeStack.Navigator>
  );
};

export default Stacks;
