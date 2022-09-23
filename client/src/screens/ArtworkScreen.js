/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Pressable,
  Text,
} from 'react-native';
import { db, auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const ArtworkScreen = () => {
  const [artworks, setArtworks] = useState([]);

  // useContext?
  let user = auth.currentUser;
  const Test = db.collection('Test').doc(user.uid).collection('artworks');

  // To service
  const getData = async () => {
    await Test.get().then((querySnapshot) => {
      let artworksFromDb = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        artworksFromDb.push(doc.data());
        // const result = doc.data()
        // console.log('artworksFromDb', artworksFromDb)
        setArtworks(artworksFromDb);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('ArtworkInfo');
  };

  return (
    // <ScrollView style={styles.container}>
    <FlatList
      data={artworks}
      keyExtractor={(item) => item}
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
    />
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    felx: 1,
    aspectRatio: 1.5,
    margin: 20,
  },
  item: {
    flex: 1 / 3,
    aspectRatio: 1,
    margin: 2,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ArtworkScreen;
