import { View, Text, Image } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";

const Recommends = () => {
  return (
    <StView>
      <Image
        style={{ width: "100%", height: 300, position: "absolute" }}
        source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
      />
      <LinearGradient colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]} style={{ width: "100%", height: 300, position: "absolute" }} />
      <MovieInfo>
        <Image
          style={{ width: 150, height: 200, marginRight: 10, marginLeft: 10 }}
          source={{ uri: "https://w.namu.la/s/fbe29c52a03345a112f33d89632e39735b30e9cd3d85346db314841d27e13f5148542ea262ae9fcd04c1a5c86c1a07586e381983ef8c4ce600ea9378fe4066a23539d5711b1de19b529aec370063c77763cf12fb3ae03383732ed2ca8571ab1f" }}
        />
        <View style={{ width: 240 }}>
          <Text style={{ color: "white", fontSize: 30 }}>Title</Text>
          <Text style={{ color: "white", fontSize: 20 }}>별점: 10/10</Text>
          <Text style={{ color: "white" }} numberOfLines={3.5} ellipsizeMode="tail">
            본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
          </Text>
        </View>
      </MovieInfo>
    </StView>
  );
};

const StView = styled.View`
  justify-content: flex-end;
  width: 500px;
  height: 300px;
`;
const MovieInfo = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export default Recommends;
