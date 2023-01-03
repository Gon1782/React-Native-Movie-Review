import { View, Text, Image, useColorScheme } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { DARK_COLOR, LIGHT_COLOR } from "../color";

const UpcommingMovies = () => {
  const isDark = useColorScheme();
  return (
    <>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, color: isDark ? DARK_COLOR : LIGHT_COLOR }}>Upcoming Movies</Text>
      </View>
      <View>
        <MovieBox>
          <Image
            style={{ width: 125, height: 175, margin: 10 }}
            source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
          />
          <View style={{ width: 250, marginRight: 10 }}>
            <Text style={{ fontSize: 30, color: isDark ? DARK_COLOR : LIGHT_COLOR }}>제목</Text>
            <Text style={{ fontSize: 20, color: isDark ? DARK_COLOR : LIGHT_COLOR }}>2023-01-03</Text>
            <Text style={{ color: isDark ? DARK_COLOR : LIGHT_COLOR }} numberOfLines={3} ellipsizeMode="tail">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </Text>
          </View>
        </MovieBox>
        <MovieBox>
          <Image
            style={{ width: 125, height: 175, margin: 10 }}
            source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
          />
          <View style={{ width: 250, marginRight: 10 }}>
            <Text style={{ fontSize: 30, color: isDark ? DARK_COLOR : LIGHT_COLOR }}>제목</Text>
            <Text style={{ fontSize: 20, color: isDark ? DARK_COLOR : LIGHT_COLOR }}>2023-01-03</Text>
            <Text style={{ color: isDark ? DARK_COLOR : LIGHT_COLOR }} numberOfLines={3} ellipsizeMode="tail">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </Text>
          </View>
        </MovieBox>
        <MovieBox>
          <Image
            style={{ width: 125, height: 175, margin: 10 }}
            source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
          />
          <View style={{ width: 250, marginRight: 10 }}>
            <Text style={{ fontSize: 30, color: isDark ? DARK_COLOR : LIGHT_COLOR }}>제목</Text>
            <Text style={{ fontSize: 20, color: isDark ? DARK_COLOR : LIGHT_COLOR }}>2023-01-03</Text>
            <Text style={{ color: isDark ? DARK_COLOR : LIGHT_COLOR }} numberOfLines={3} ellipsizeMode="tail">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </Text>
          </View>
        </MovieBox>
      </View>
    </>
  );
};

const MovieBox = styled.View`
  flex-direction: row;
`;

export default UpcommingMovies;
