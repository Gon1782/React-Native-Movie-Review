import { ActivityIndicator, Image, Linking, RefreshControl, ScrollView, Text, useColorScheme, View } from "react-native";
import styled from "@emotion/native";
import { SCREEN_WIDTH } from "../util";
import { getDetail } from "../api/api";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useQuery, useQueryClient } from "react-query";
import { Loader, MovieInfo, Poster, StView } from "../components/Recommends";
import { useState } from "react";

const Detail = ({
  route: {
    params: { movieId },
  },
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const isDark = useColorScheme() === "dark";
  const queryClient = useQueryClient();

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries("Detail");
    setRefreshing(false);
  };

  const { data, isLoading } = useQuery(["Detail", movieId], getDetail);

  const openYoutube = async (key) => {
    const url = `https://www.youtube.com/watch?v=${key}`;
    await Linking.openURL(url);
  };

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator />
      </Loader>
    );
  }

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
      <StView>
        <Image style={{ width: SCREEN_WIDTH, height: 300, position: "absolute" }} source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }} />
        <LinearGradient colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]} style={{ width: "100%", height: 300, position: "absolute" }} />
        <MovieInfo style={{ alignItems: "center" }}>
          <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${data.poster_path}` }} />
          <View style={{ width: 240 }}>
            <Text style={{ color: "white", fontSize: 30 }}>{data.title}</Text>
          </View>
        </MovieInfo>
      </StView>
      <View>
        <Text style={{ color: isDark ? "white" : "black", lineHeight: 20, padding: 20 }}>{data.overview}</Text>
      </View>
      <YoutubeList>
        {data?.videos?.results.map((video) => (
          <YoutubeBox key={video.key} onPress={() => openYoutube(video.key)}>
            <AntDesign name="youtube" size={24} color={isDark ? "white" : "black"} />
            <Text style={{ marginLeft: 10, color: isDark ? "white" : "black" }}>{video.name}</Text>
          </YoutubeBox>
        ))}
      </YoutubeList>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 30, color: isDark ? "white" : "black" }}>Reviews</Text>
      </View>
      <AddReview style={{ backgroundColor: isDark ? "white" : "black" }} onPress={() => {}}>
        <Text style={{ fontSize: 20, color: isDark ? "black" : "white" }}>Add Review</Text>
      </AddReview>
    </ScrollView>
  );
};

const YoutubeBox = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
`;

const YoutubeList = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

const AddReview = styled.TouchableOpacity`
  margin: 0 20px 20px 20px;
  padding: 10px;
  border-radius: 5px;
  border-width: 1px;
  align-items: center;
`;

export default Detail;
