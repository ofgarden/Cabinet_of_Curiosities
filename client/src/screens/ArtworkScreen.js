/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { db, auth } from '../../firebase';

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

  return (
    // <View style={styles.imageContainer}>
    <ScrollView style={styles.container}>
      <FlatList
        data={artworks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* <TouchableHighlight onPress={() => {}}> */}
            <Image
              style={styles.image}
              // resizeMode="cover"
              source={{ uri: item.image }}
            />
            {/* <Text>{item.artist}</Text> */}
            {/* </TouchableHighlight> */}
          </View>
        )}
      />
      {/* </View> */}
    </ScrollView>
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
