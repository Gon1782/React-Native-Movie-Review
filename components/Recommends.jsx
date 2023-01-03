import { View, Text, Image } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import Swiper from "react-native-web-swiper";
import { useQuery } from "react-query";
import { getPopularMovies } from "../api/api";

const Recommends = () => {
  const { isLoading, isError, data, error } = useQuery("popular", getPopularMovies);
  if (isLoading) return <Text>로딩중...</Text>;
  if (isError) return <Text>에러: {error.message}</Text>;

  const movies = data.results.slice(0, 5);

  return (
    <SliderContainer>
      <Swiper loop timeout={8} controlsEnabled={false}>
        {movies.map((movie) => {
          return (
            <StView key={movie.id}>
              <Image
                style={{ width: "100%", height: 300, position: "absolute" }}
                source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}
              />
              <LinearGradient colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]} style={{ width: "100%", height: 300, position: "absolute" }} />
              <MovieInfo>
                <Image
                  style={{ width: 150, height: 200, marginRight: 10, marginLeft: 10 }}
                  source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                />
                <View style={{ width: 240 }}>
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
  width: 100%;
  height: 300px;
`;

const StView = styled.View`
  justify-content: flex-end;
  width: 500px;
  height: 300px;
`;
const MovieInfo = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 10px;
`;

export default Recommends;
