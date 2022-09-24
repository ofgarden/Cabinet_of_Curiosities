import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Pressable,
  Text,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getArtwork } from '../services/artworkService';

const screenWidth = Dimensions.get('window').width - 50;
const screenHeight = Dimensions.get('window').height;
const numColumns = 3;
const imageSize = screenWidth / numColumns - 10;

const ArtworkScreen = (props) => {
  const { artworks } = props;
  // const [artwork, setArtwork] = useState();

  // console.log(artworks[0]);
  // 내가 클릭한 버튼의 데이터를 어떻게 보내지...? 하.. 제일 중요한 걸 .. ^^ ㅅ..ㅂ....
  const navigation = useNavigation();
  const handleNavigation = () => {
    // console.log(event._dispatchInstances.memoizedProps.children);
    // setArtwork()
    navigation.navigate('ArtworkInfo');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={artworks}
        numColumns={3}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Pressable key={item.id} onPress={handleNavigation}>
            <View style={styles.item}>
              {/* <Text>{item.title}</Text> */}
              {/* !!!!!사용량 초과 방지용!!!!! */}
              <Image
                style={styles.item}
                resizeMode="cover"
                source={{ uri: item.image }}
              />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingTop: 20,
  },
  item: {
    height: imageSize,
    width: imageSize,
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 3, height: 1 },
    shadowRadius: 2.5,
  },
});

export default ArtworkScreen;
