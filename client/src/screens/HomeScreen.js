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
import { useFonts } from 'expo-font';

const HomeScreen = ({ exhibitionData }) => {
  // const { records } = exhibitionData;
  // console.log('records', records);

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Hello,{'\n'}Collector</Text>
      <Text style={styles.text}>Highlights</Text>
      <View style={styles.exhibition_container}>
        {/* <HomeItem exhibition={exhibitionData.records} /> */}
        <FlatList
          horizontal
          data={exhibitionData.records}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return <HomeItem key={item.id} exhibition={item} />;
          }}
        />
      </View>
    </SafeAreaView>
    // <Text>TODO: 수평으로 스크롤 할 수 있는 기능</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  welcome: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 35,
    color: '#152238',
    marginTop: 40,
    marginBottom: 35,
    marginLeft: 30,
  },
  text: {
    marginBottom: 10,
    marginRight: 30,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'right',
  },
  exhibition_container: {
    alignSelf: 'center',
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height - 350,
    borderRadius: 20,
  },
});

export default HomeScreen;
