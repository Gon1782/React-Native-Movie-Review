import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native'
import { Image, View, Text } from 'react-native'

const TopRatedMovieList = ({movie}) => {
  const {navigate} = useNavigation();

  return (
    <Box onPress={() => navigate("Stacks", { screen: "Detail", params: { movieId: movie.id } })}>
      <Image style={{ width: 200, height: 300, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} />
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }} numberOfLines={2} ellipsizeMode="tail" >{movie.title}</Text>
        <Text>별점: {movie.vote_average}/10</Text>
      </View>
    </Box>
  )
}

const Box = styled.TouchableOpacity`
  align-items: flex-start;
  width: 200px;
  height: 100%;
  border-radius: 10px;
  background-color: bisque;
`;

export default TopRatedMovieList