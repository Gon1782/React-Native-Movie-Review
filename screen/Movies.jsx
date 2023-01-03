import { RefreshControl, ScrollView } from "react-native";
import React from "react";
import Recommends from "../components/Recommends";
import TopRatedMovie from "../components/TopRatedMovie";
import UpcommingMovies from "../components/UpcommingMovies";

const Movies = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <Recommends />
      <TopRatedMovie />
      <UpcommingMovies />
    </ScrollView>
  );
};

export default Movies;
