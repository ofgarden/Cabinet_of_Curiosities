import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import { auth, db } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const ArtworkInfo = ({
  artworks,
  setArtworks,
  selected,
  modalVisible,
  setModalVisible,
}) => {
  const navigation = useNavigation();

  const handleDelete = async () => {
    let user = auth.currentUser;
    db.collection('users')
      .doc(user.uid)
      .collection('artworks')
      .doc(selected)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
    setArtworks((prev) => [
      ...prev.filter((artwork) => artwork.id !== selected),
    ]);
    navigation.navigate('Artwork');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {artworks
          .filter((artwork) => {
            return artwork.id === selected;
          })
          .map((artwork, i) => {
            return (
              <Image
                key={artwork.id}
                source={{ uri: artwork.image }}
                style={styles.image}
              />
            );
          })}
      </View>
      <Text style={styles.textContainer}>
        {artworks
          .filter((artwork) => {
            return artwork.id === selected;
          })
          .map((artwork, i) => {
            return (
              <View key={artwork.id}>
                {/* TODO: 어떻게 하면 분리 시키지/.?^^ */}
                <Text>
                  <Text style={styles.title}>
                    {artwork.title}
                    {'\n'}
                    {'\n'}
                  </Text>
                </Text>
                <Text>
                  {artwork.artist}
                  {'\n'}
                </Text>
                <Text style={styles.description}>
                  {artwork.medium}
                  {'\n'}
                  {artwork.year}
                </Text>
              </View>
            );
          })}
      </Text>

      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleDelete}
            >
              <Text style={styles.textStyle}>DELETE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    padding: 38,
  },
  imageContainer: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 3, height: 1 },
    shadowRadius: 2.5,
  },
  image: {
    width: 300,
    height: 300,
  },
  textContainer: {
    flex: 1,
    // width: 320,
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    marginTop: 38,
  },
  // title_container: {
  //   felx: 1,
  //   alignSelf: 'center',
  // },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    // textAlign: centert',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ArtworkInfo;
