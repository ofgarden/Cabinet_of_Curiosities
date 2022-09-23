import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { UserContext } from '../UserContext';

const HomeScreen = () => {
  const { text, setText } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text>TODO: FROM API IMAGE 가져오기</Text>
      <Text>수평으로 스크롤 할 수 있는 기능</Text>
      <Text>{text}</Text>
      <TouchableOpacity
        onPress={() => {
          setText('Hey');
        }}
      >
        <Text>PRESS!</Text>
      </TouchableOpacity>
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
