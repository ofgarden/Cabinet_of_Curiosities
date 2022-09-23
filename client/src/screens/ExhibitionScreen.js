import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const ExhibitionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.contentContainer}>
        TODO: SPECIFIC INFORMATION FROM API
      </Text>
      <Text>TODO: AVOID OVERWARP HEADER</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // contentContainer: {
  //   marginTop: 141,
  // },
});

export default ExhibitionScreen;
