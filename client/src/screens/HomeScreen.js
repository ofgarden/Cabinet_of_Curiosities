import React from 'react';
import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';

import HomeItem from '../components/HomeItem';

const HomeScreen = ({ exhibitionData }) => {
  // console.log('HOMESCREEN', exhibitionData.records);
  console.log('from homeScreen', exhibitionData);
  return (
    <SafeAreaView style={styles.container}>
      <Text>TODO: 수평으로 스크롤 할 수 있는 기능</Text>
      <FlatList
        data={exhibitionData.records}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          return <HomeItem key={item.id} exhibition={item} />;
        }}
      />
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
