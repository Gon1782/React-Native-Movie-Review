import { View, Text, Image, useColorScheme, TouchableOpacity } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { useInfiniteQuery } from "react-query";
import { getUpcommingMovies } from "../api/api";

const UpcommingMovies = () => {
  const isDark = useColorScheme() === "dark";

  const { isLoading, isError, data, error, fetchNextPage, hasNextPage } = useInfiniteQuery("Upcomming", getUpcommingMovies, {
    getNextPageParam: (currentPage) => {
      const nextPage = currentPage.page + 1;
      return nextPage > currentPage.total_pages ? null : nextPage;
    },
  });

  if (isLoading) return <Text>로딩중...</Text>;
  if (isError) return <Text>에러: {error.message}</Text>;

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  };

  return (
    <>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, color: `${isDark ? "white" : "black"}` }}>Upcoming Movies</Text>
      </View>
      <View>
        {data.pages.map((movies) => {
          return movies.results.map((movie) => (
            <MovieBox key={movie.id}>
              <Image style={{ width: 125, height: 175, margin: 10 }} source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }} />
              <View style={{ width: 250, marginRight: 10 }}>
                <Text style={{ fontSize: 30, color: `${isDark ? "white" : "black"}` }}>{movie.title}</Text>
                <Text style={{ fontSize: 20, color: `${isDark ? "white" : "black"}` }}>{movie.release_date}</Text>
                <Text style={{ color: `${isDark ? "white" : "black"}` }} numberOfLines={3} ellipsizeMode="tail">
                  {movie.overview}
                </Text>
              </View>
            </MovieBox>
          ));
        })}
      </View>
      <TouchableOpacity onPress={loadMore}><Text>불러오기...</Text></TouchableOpacity>
    </>
  );
};

const MovieBox = styled.View`
  flex-direction: row;
`;

export default UpcommingMovies;
