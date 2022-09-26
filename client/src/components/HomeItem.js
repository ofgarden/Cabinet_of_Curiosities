import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
// const screenHeight = Dimensions.get('window').height;
// const screenWidth = Dimensions.get('window').width - 50;

const ExhibitionItem = ({ exhibition }) => {
  const { title, poster, begindate, enddate, venues } = exhibition;
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
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={
          poster
            ? { uri: poster.imageurl }
            : require('../assets/images/default.png')
        }
        style={styles.items}
        imageStyle={{ opacity: 0.8 }}
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  items: {
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 15,
    borderColor: '#152238',
    overflow: 'hidden',
    borderRadius: 20,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    top: 390,
    color: 'white',
    textShadowColor: 'grey',
    textShadowOpacity: 0.2,
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 2,
  },
});

export default ExhibitionItem;
