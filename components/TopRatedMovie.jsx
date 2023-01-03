import { View, Text, ScrollView, Image, useColorScheme } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { useQuery } from "react-query";
import { getTopRatedMovies } from "../api/api";

const TopRatedMovie = () => {
  const isDark = useColorScheme() === "dark";
  const { isLoading, isError, data, error } = useQuery("TopRated", getTopRatedMovies);
  if (isLoading) return <Text>로딩중...</Text>;
  if (isError) return <Text>에러: {error.message}</Text>;
  const movies = data.results;

  return (
    <>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, color: `${isDark ? "white" : "black"}` }}>Top Rated Movies</Text>
      </View>
      <ScrollView horizontal={true}>
        {movies.map((movie) => {
          return (
            <Box key={movie.id}>
              <Image style={{ width: 200, height: 300 }} source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }} />
              <View style={{ margin: 10 }}>
                <Text>{movie.title}</Text>
                <Text>별점: {movie.vote_average}/10</Text>
                <Text numberOfLines={2} ellipsizeMode="tail">
                  {movie.overview}
                </Text>
              </View>
            </Box>
          );
        })}
      </ScrollView>
    </>
  );
};

const Box = styled.View`
  align-items: flex-start;
  width: 200px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: bisque;
`;

export default TopRatedMovie;
