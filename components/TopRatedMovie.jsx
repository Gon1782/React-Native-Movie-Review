import { View, Text, useColorScheme, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { getTopRatedMovies } from "../api/api";
import { Loader } from "./Recommends";
import TopRatedMovieList from "./TopRatedMovieList";

const TopRatedMovie = () => {
  const isDark = useColorScheme() === "dark";

  const { isLoading, isError, data, error, fetchNextPage, hasNextPage } = useInfiniteQuery("TopRated", getTopRatedMovies, {
    getNextPageParam: (currentPage) => {
      const nextPage = currentPage.page + 1;
      return nextPage > currentPage.total_pages ? null : nextPage;
    },
  });

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }
  if (isError) return <Text>에러: {error.message}</Text>;

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, color: isDark ? "white" : "black" }}>Top Rated Movies</Text>
      </View>
      <FlatList
        style={{ marginLeft: 10, marginRight: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
        data={data.pages.map((movies) => movies.results).flat()}
        renderItem={({ item }) => <TopRatedMovieList movie={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<View style={{ width: 10 }} />}
      />
    </>
  );
};

export default TopRatedMovie;
