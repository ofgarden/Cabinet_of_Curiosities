import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Dimensions,
} from 'react-native';
import * as Firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import { auth, db } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

const AddArtwork = ({ setArtworks }) => {
  const [name, setName] = useState('');
  const [memo, setMemo] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigation = useNavigation();

  const handlePickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log('result: ', result);

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const handleSubmit = async () => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', profileImage, true);
      xhr.send(null);
    });

    const ref = Firebase.storage().ref().child(new Date().toISOString());
    const snapshot = ref.put(blob);

    snapshot.on(
      Firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        setUploading(true);
      },
      (error) => {
        setUploading(false);
        console.log(error);
        blob.close();
        return;
      },
      () => {
        snapshot.snapshot.ref.getDownloadURL().then((url) => {
          setUploading(false);
          console.log('download url : ', url);
          blob.close();
          // return url;

          let user = auth.currentUser;
          console.log('user.uid: ', user.uid);

          const dbRef = db.collection('users').doc(user.uid);
          // .collection('artworks')
          // .doc();

          const id = dbRef.id;
          console.log(id);

          let saved = {
            email: auth.currentUser?.email,
            id: id,
            image: url,
            name: name,
            memo: memo,
          };

          console.log('saved: ', saved);

          // Automatically, value updated
          dbRef
            .set(saved)
            .then(() => {
              setTimeout(() => {}, 10000);
              navigation.navigate('Profile');
            })
            .catch((error) => {
              console.log(error);
            });
        });
      },
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Your Profile</Text>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.imageBox} />
        ) : (
          <Pressable>
            <ImageBackground
              resizeMode="contain"
              source={require('../assets/images/mona-lisa-flaticon.png')}
              imageStyle={{ opacity: 0.8 }}
            >
              <Text style={styles.imageBox} onPress={handlePickImage} />
            </ImageBackground>
            {/* <Text>Choose a image</Text> */}
          </Pressable>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="nickname"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Describe yourself"
            value={memo}
            onChangeText={(text) => setMemo(text)}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text>
            {!uploading ? (
              <Pressable onPress={handleSubmit}>
                <Text style={styles.buttonText}>save changes</Text>
              </Pressable>
            ) : (
              <ActivityIndicator size="small" color="#152238" />
            )}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor: 'white',
  },
  header: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#152238',
    paddingBottom: 32,
  },
  imageBox: {
    marginTop: 35,
    alignSelf: 'center',
    width: 160,
    height: 200,
    borderRadius: 10,
  },
  inputContainer: {
    alignSelf: 'center',
    width: 180,
    marginTop: 40,
  },
  input: {
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#152238',
    fontSize: 18,
  },
  buttonContainer: {
    alignSelf: 'center',
    padding: 10,
    width: 180,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#152238',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  buttonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'white',
  },
});

export default AddArtwork;
