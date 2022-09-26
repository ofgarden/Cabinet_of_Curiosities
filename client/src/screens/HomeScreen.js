/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
  Dimensions,
  View,
} from 'react-native';

import HomeItem from '../components/HomeItem';

const HomeScreen = ({ exhibitionData }) => {
  const { records } = exhibitionData;
  // console.log('records', records);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, Collector</Text>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={{
            width: 150,
            height: 150,
            borderWidth: 1,
            borderColor: 'blue',
          }}
        />
        <View
          style={{
            width: 150,
            height: 150,
            borderWidth: 1,
            borderColor: 'blue',
          }}
        />
      </View>
      <Text style={{ borderWidth: 1 }}>ARTISTS INFOR</Text>
    </SafeAreaView>
    // <Text>TODO: 수평으로 스크롤 할 수 있는 기능</Text>
    // <FlatList
    //   horizontal
    //   data={exhibitionData.records}
    //   keyExtractor={(item, index) => index}
    //   renderItem={({ item }) => {
    //     return <HomeItem key={item.id} exhibition={item} />;
    //   }}
    // />
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    // height: Dimensions.get('window').height - 79,
    // width: Dimensions.get('window').width,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default HomeScreen;
