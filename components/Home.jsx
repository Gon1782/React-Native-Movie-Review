import { TouchableOpacity } from "react-native";
import React from "react";
import styled from '@emotion/native';

const Home = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("Notifications")}>
      <SectionTitle>Home</SectionTitle>
    </TouchableOpacity>
  );
};

const SectionTitle = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.title}
`

export default Home;
