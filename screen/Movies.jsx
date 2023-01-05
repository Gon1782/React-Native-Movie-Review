import { FlatList } from "react-native";
import { useState } from "react";
import Recommends from "../components/Recommends";
import TopRatedMovie from "../components/TopRatedMovie";
import UpcommingMovies from "../components/UpcommingMovies";
import { useQueryClient } from "react-query";

const Movies = () => {
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries(["popular"]);
    await queryClient.invalidateQueries(["TopRated"]);
    await queryClient.invalidateQueries(["Upcomming"]);
    setRefreshing(false);
  };

  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListHeaderComponent={
        <>
          <Recommends />
          <TopRatedMovie />
          <UpcommingMovies />
        </>
      }
    />
  );
};

export default Movies;
