import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { auth } from '../../firebase';
import { UserContext } from '../contexts/UserContext';
import LoginScreen from './LoginScreen';

// THINK: Create doc for user info? -> Maybe data for ProfileScreen?
// 아니면 아예 프로필 화면에서 셋팅하고 거기서 데이터 저장하기..! 이게 더 낫다
// db.collection('users').doc(user.uid).set({email: user.email})
// db.collection('users').doc(user.uid).collection('artworks').doc('any');

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
          <Text>Profile Screen (refactor)</Text>
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
