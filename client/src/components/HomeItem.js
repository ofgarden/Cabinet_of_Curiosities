import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// const screenHeight = Dimensions.get('window').height;
// const screenWidth = Dimensions.get('window').width - 50;

const ExhibitionItem = ({ exhibition }) => {
  const { title, poster, begindate, enddate, venues } = exhibition;
  const navigation = useNavigation();
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
    // <View style={styles.container}>
    <ImageBackground
      resizeMode="cover"
      source={
        poster
          ? { uri: poster.imageurl }
          : require('../assets/images/default.png')
      }
      style={styles.container}
      imageStyle={{ opacity: 0.8 }}
    ></ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    height: Dimensions.get('window').height - 79,
    width: Dimensions.get('window').width,
    // width: 100,
    // height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 50,
    // borderWidth: 1,
    // borderColor: 'red',
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    // alignItems: 'center',
  },
  items: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    height: 180,
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#152238',
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: 'black',
    marginBottom: 15,
  },
  // date_container: {
  //   textAlign: 'center',
  // },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    // borderWidth: 1,
    textAlign: 'left',
  },
  date_mark: {
    fontSize: 11,
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default ExhibitionItem;
