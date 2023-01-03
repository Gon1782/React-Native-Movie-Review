import { View, Text, ScrollView, Image, useColorScheme } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { DARK_COLOR, LIGHT_COLOR } from "../color";

const TopRatedMovie = () => {
  const isDark = useColorScheme();
  return (
    <>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, color: isDark ? DARK_COLOR : LIGHT_COLOR }}>Top Rated Movies</Text>
      </View>
      <ScrollView horizontal={true}>
        <Box>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
          />
          <View style={{marginLeft: 10}}>
            <Text>제목</Text>
            <Text>별점: 10/10</Text>
            <Text numberOfLines={1} ellipsizeMode="tail">
              본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
            </Text>
          </View>
        </Box>
        <Box>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
          />
          <Text>제목</Text>
          <Text>별점: 10/10</Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
          </Text>
        </Box>
        <Box>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
          />
          <Text>제목</Text>
          <Text>별점: 10/10</Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
          </Text>
        </Box>
        <Box>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
          />
          <Text>제목</Text>
          <Text>별점: 10/10</Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
          </Text>
        </Box>
        <Box>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
          />
          <Text>제목</Text>
          <Text>별점: 10/10</Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
          </Text>
        </Box>
      </ScrollView>
    </>
  );
};

const Box = styled.View`
  align-items: flex-start;
  width: 200px;
  height: 280px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: bisque;
`;

export default TopRatedMovie;
