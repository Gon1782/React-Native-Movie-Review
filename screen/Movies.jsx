import { FlatList } from "react-native";
import React from "react";
import Recommends from "../components/Recommends";
import TopRatedMovie from "../components/TopRatedMovie";
import UpcommingMovies from "../components/UpcommingMovies";

const Movies = () => {
  return (
    <FlatList
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
