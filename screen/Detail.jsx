import { View, Text } from "react-native";
import React from "react";

const Detail = ({
  navigation: { navigate },
  route: {
    params: { movieId },
  },
}) => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;
