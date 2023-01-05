import { View, Text, Image, ActivityIndicator } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-web-swiper";
import { useQuery } from "react-query";
import { getPopularMovies } from "../api/api";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_WIDTH } from '../util';

const Recommends = () => {
  const { navigate } = useNavigation();

  const { isLoading, isError, data, error } = useQuery("popular", getPopularMovies);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }
  if (isError) return <Text>에러: {error.message}</Text>;

  const movies = data.results;

  return (
    <SliderContainer>
      <Swiper loop timeout={8} controlsEnabled={false}>
        {movies.map((movie) => {
          return (
            <StView key={movie.id}>
              <Image style={{ width: "100%", height: 300, position: "absolute" }} source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }} />
              <LinearGradient colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]} style={{ width: "100%", height: 300, position: "absolute" }} />
              <MovieInfo onPress={() => navigate("Stacks", { screen: "Detail", params: { movieId: movie.id } })}>
                <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
                <View style={{ width: Math.round(SCREEN_WIDTH / 3) * 1.8 }}>
                  <Text style={{ color: "white", fontSize: 30 }}>{movie.title}</Text>
                  <Text style={{ color: "white", fontSize: 20 }}>별점: {movie.vote_average}/10</Text>
                  <Text style={{ color: "white" }} numberOfLines={3} ellipsizeMode="tail">
                    {movie.overview}
                  </Text>
                </View>
              </MovieInfo>
            </StView>
          );
        })}
      </Swiper>
    </SliderContainer>
  );
};

const SliderContainer = styled.View`
  width: ${SCREEN_WIDTH};
  height: 300px;
`;

export const StView = styled.View`
  justify-content: flex-end;
  width: ${SCREEN_WIDTH};
  height: 300px;
`;

export const Poster = styled.Image`
  width: ${Math.round(SCREEN_WIDTH / 3) + 'px'};
  height: 200px; 
  margin-right: 10px;
  margin-left: 10px;
`

export const MovieInfo = styled.TouchableOpacity`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Recommends;
