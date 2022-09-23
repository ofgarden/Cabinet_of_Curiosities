import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import { UserContext } from '../UserContext';
import LoginScreen from './LoginScreen';

const ProfileScreen = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

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
          <Text>Profile Screen</Text>
          <Text>Email: {auth.currentUser?.email}</Text>
          <TouchableOpacity onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign out</Text>
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
