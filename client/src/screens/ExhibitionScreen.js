import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const ExhibitionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Exhibition Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExhibitionScreen;
