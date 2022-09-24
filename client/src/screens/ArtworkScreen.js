import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  // Image,
  Pressable,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getArtwork } from '../services/artworkService';

const ArtworkScreen = (props) => {
  // const [artworks, setArtworks] = useState([]);

  // 자동 업데이트 되는 함수 추가! (previous exercise 참고)
  // useEffect(() => {
  //   getArtwork().then((artworkslist) => setArtworks(artworkslist));
  // }, []);
  const { artworks } = props;

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('ArtworkInfo');
  };

  // TODO [FIX]: Encountered two children with the same key,
  return (
    <View style={styles.container}>
      <FlatList
        data={artworks}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Pressable key={item.id} onPress={handleNavigation}>
            <View style={styles.item}>
              <Text>{item.title}</Text>
              {/* !!!!!사용량 초과 방지용!!!!!
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: item.image }}
            /> */}
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    maxWidth: '100%',
  },
  item: {
    width: 150,
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default ArtworkScreen;
