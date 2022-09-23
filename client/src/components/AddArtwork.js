import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

const AddArtwork = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AddArtwork!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
});

export default AddArtwork;
