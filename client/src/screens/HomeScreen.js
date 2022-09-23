import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TODO: FROM API IMAGE 가져오기</Text>
      <Text>수평으로 스크롤 할 수 있는 기능</Text>
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

export default HomeScreen;
