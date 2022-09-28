/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { auth } from '../../firebase';
import { UserContext } from '../contexts/UserContext';
import { getProfile } from '../services/profileService';
import LoginScreen from './LoginScreen';

const ProfileScreen = ({ profile, setProfile }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  async function updateProfile() {
    const data = await getProfile();
    setProfile(data);
  }

  useEffect(() => {
    updateProfile();
  }, []);

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
        <View style={styles.container}>
          {profile ? (
            <>
              <Image source={{ uri: profile.image }} style={styles.imageBox} />
              <Text style={styles.nameText}>{profile.name}</Text>
              <Text style={styles.memoText}>{profile.memo}</Text>
            </>
          ) : (
            <Text style={styles.text}>Please edit your profile</Text>
          )}
          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  nameText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
  },
  memoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  boxContainer: {
    flex: 1 / 2,
    flexDirection: 'row',
    marginTop: 55,
  },
  box: {
    marginHorizontal: 13,
    borderWidth: 1,
    borderRadius: 5,
    width: 90,
    height: 90,
  },
  button: {
    width: '40%',
    marginTop: 50,
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#152238',
  },
  buttonText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
});

export default ProfileScreen;
