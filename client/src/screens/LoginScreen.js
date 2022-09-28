/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';

import { auth } from '../../firebase';
import { UserContext } from '../contexts/UserContext';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered in with:', user.email);
      })
      .catch((error) => console.log('[ERROR] ', error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch((error) => console.log('[ERROR] ', error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.text}>Cabinet of Curiosities</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 20,
    color: '#152238',
    fontFamily: 'FrederickatheGreat-Regular',
    fontSize: 40,
    textShadowColor: 'grey',
    textShadowOpacity: 0.2,
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 2,
  },
  inputContainer: {
    marginTop: 20,
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderBottomColor: '#152238',
    borderBottomWidth: 2,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  button: {
    backgroundColor: '#152238',
    width: '100%',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: '#152238',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '700',
    fontSize: 15,
  },
  buttonOutlineText: {
    color: '#152238',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default LoginScreen;
