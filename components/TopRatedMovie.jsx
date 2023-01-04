import { View, Text, Image, useColorScheme, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { useInfiniteQuery } from "react-query";
import { getTopRatedMovies } from "../api/api";
import { useNavigation } from "@react-navigation/native";
import { Loader } from './Recommends';

const TopRatedMovie = () => {
  const { navigate } = useNavigation();

  const isDark = useColorScheme() === "dark";

  const renderItem = ({ item }) => (
    <Box onPress={() => navigate("Stacks", { screen: "Detail", params: { movieId: item.id } })}>
      <Image style={{ width: 200, height: 300 }} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
      <View style={{ margin: 10 }}>
        <Text>{item.title}</Text>
        <Text>별점: {item.vote_average}/10</Text>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {item.overview}
        </Text>
      </View>
    </Box>
  );

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
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<View style={{ width: 10 }} />}
      />
    </>
  );
};

const Box = styled.TouchableOpacity`
  align-items: flex-start;
  width: 200px;
  background-color: bisque;
`;

export default TopRatedMovie;
