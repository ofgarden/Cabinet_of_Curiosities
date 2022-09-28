import React from 'react';
import { View, Text, Image, StyleSheet, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../firebase';

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

    setModalVisible(!modalVisible);

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
      {artworks
        .filter((artwork) => {
          return artwork.id === selected;
        })
        .map((artwork, i) => {
          return (
            <Text key={artwork.id} style={styles.descriptionContainer}>
              <View>
                <Text style={styles.artist}>{artwork.artist}</Text>
                <Text style={styles.titleNyear}>
                  <Text style={styles.title}>{artwork.title}, </Text>
                  <Text style={styles.year}> {artwork.year}</Text>
                </Text>
                <Text style={styles.medium}>{artwork.medium}</Text>
              </View>
            </Text>
          );
        })}

      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this item?
            </Text>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.closeText}>CLOSE</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={handleDelete}
              >
                <Text style={styles.deleteText}>DELETE</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 38,
    alignItems: 'center',
    justifyContent: 'center',
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
  descriptionContainer: {
    marginTop: 38,
  },
  titleContainer: {},
  artist: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  titleNyear: {
    marginTop: 3,
    fontSize: 22,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins-SemiBoldItalic',
    color: '#152238',
  },
  medium: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
    fontSize: 13,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 20,
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
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 7,
  },
  buttonClose: {
    borderWidth: 5,
    borderColor: '#152238',
  },
  buttonDelete: {
    borderWidth: 5,
    backgroundColor: '#152238',
    borderColor: '#152238',
  },
  closeText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  modalText: {
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});

export default ArtworkInfo;
