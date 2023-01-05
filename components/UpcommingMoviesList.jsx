import { View, Text, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_WIDTH } from "../util";
import styled from '@emotion/native';
import { Poster } from './Recommends';

const UpcommingMoviesList = ({ movie }) => {
  const isDark = useColorScheme() === "dark";
  const { navigate } = useNavigation();

  return (
    <MovieBox onPress={() => navigate("Stacks", { screen: "Detail", params: { movieId: movie.id } })}>
      <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
      <View style={{ justifyContent: "center", width: Math.round(SCREEN_WIDTH / 3) * 1.8, marginRight: 10 }}>
        <Text style={{ fontSize: 30, color: isDark ? "white" : "black" }} numberOfLines={2} ellipsizeMode="tail">
          {movie.title}
        </Text>
        <Text style={{ fontSize: 20, color: isDark ? "white" : "black" }}>{movie.release_date}</Text>
        <Text style={{ color: isDark ? "white" : "black" }} numberOfLines={3} ellipsizeMode="tail">
          {movie.overview}
        </Text>
      </View>
    </MovieBox>
  );
};

const MovieBox = styled.TouchableOpacity`
  flex-direction: row;
`;

export default UpcommingMoviesList;
