import { View, Text, Image, useColorScheme, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import styled from "@emotion/native";
import { useInfiniteQuery } from "react-query";
import { getUpcommingMovies } from "../api/api";
import { useNavigation } from '@react-navigation/native';
import { Loader } from './Recommends';

const UpcommingMovies = () => {
  const isDark = useColorScheme() === "dark";
  const { navigate } = useNavigation();

  const renderItem = ({ item }) => (
    <MovieBox onPress={() => navigate("Stacks", { screen: "Detail", params: { movieId: item.id } })}>
      <Image style={{ width: 125, height: 175, margin: 10 }} source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} />
      <View style={{ justifyContent: "center", width: 250, marginRight: 10 }}>
        <Text style={{ fontSize: 30, color: isDark ? "white" : "black" }}>{item.title}</Text>
        <Text style={{ fontSize: 20, color: isDark ? "white" : "black" }}>{item.release_date}</Text>
        <Text style={{ color: isDark ? "white" : "black" }} numberOfLines={3} ellipsizeMode="tail">
          {item.overview}
        </Text>
      </View>
    </MovieBox>
  );

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
      <FlatList onEndReached={loadMore} onEndReachedThreshold={0.6} data={data.pages.map((movies) => movies.results).flat()} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const MovieBox = styled.TouchableOpacity`
  flex-direction: row;
`;

export default UpcommingMovies;
