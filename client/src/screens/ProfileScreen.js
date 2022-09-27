import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { auth, db } from '../../firebase';
import { UserContext } from '../contexts/UserContext';
import LoginScreen from './LoginScreen';

import { useNavigation } from '@react-navigation/native';
import * as Firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';

// THINK: Create doc for user info? -> Maybe data for ProfileScreen?
// 아니면 아예 프로필 화면에서 셋팅하고 거기서 데이터 저장하기..! 이게 더 낫다
// db.collection('users').doc(user.uid).set({email: user.email})
// db.collection('users').doc(user.uid).collection('artworks').doc('any');

const ProfileScreen = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const [name, setName] = useState('');
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
            id: id,
            name: name,
            email: auth.currentUser?.email,
            image: url,
          };

          console.log('saved: ', saved);

          // setArtworks((prev) => [...prev, saved]);

          dbRef
            .set(saved)
            .then(() => {
              setTimeout(() => {}, 10000);
              // navigation.navigate('Artwork');
            })
            .catch((error) => {
              console.log(error);
            });
        });
      },
    );
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
      })
      .catch((error) => console.log('[ERROR] ', error.message));
  };

  return (
    <>
      {isLoggedIn ? (
        <SafeAreaView style={styles.container}>
          <Text>Profile Screen (refactor)</Text>
          <Text>Email: {auth.currentUser?.email}</Text>
          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>

          <Pressable>
            <Text style={styles.imageBox} onPress={handlePickImage}>
              Select Image
            </Text>
          </Pressable>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Save Profile</Text>
          </TouchableOpacity>
        </SafeAreaView>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'lavender',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'lavender',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ProfileScreen;
