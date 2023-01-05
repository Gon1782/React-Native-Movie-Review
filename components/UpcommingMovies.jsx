import { View, Text, useColorScheme, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { getUpcommingMovies } from "../api/api";
import { Loader } from "./Recommends";
import UpcommingMoviesList from "./UpcommingMoviesList";

const UpcommingMovies = () => {
  const isDark = useColorScheme() === "dark";

  const { isLoading, isError, data, error, fetchNextPage, hasNextPage } = useInfiniteQuery("Upcomming", getUpcommingMovies, {
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
    <View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, color: isDark ? "white" : "black" }}>Upcoming Movies</Text>
      </View>
      <FlatList
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        data={data.pages.map((movies) => movies.results).flat()}
        renderItem={({ item }) => <UpcommingMoviesList movie={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<View style={{ height: 10 }} />}
      />
    </View>
  );
};

export default UpcommingMovies;
