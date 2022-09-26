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
    <Pressable
      onPress={() => {
        navigation.navigate('ExhibitionInfo', { exhibition });
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          source={
            poster
              ? { uri: poster.imageurl }
              : require('../assets/images/default.png')
          }
          style={styles.items}
          imageStyle={{ opacity: 0.35 }}
        >
          <Text style={styles.title}>{title}</Text>
          {/* <View style={styles.date_container}> */}
          <Text style={styles.text_container}>
            <Text style={styles.date}>
              {begindate} <Text style={styles.date_mark}> to </Text> {enddate}{' '}
            </Text>
            {`\n`}
            <Text style={styles.venue}>
              {venues.map((item) => item.fullname)}
            </Text>
          </Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  items: {
    flex: 1,
    width: Dimensions.get('window').width - 40,
    height: 180,
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#152238',
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginBottom: 15,
  },
  text_container: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
    top: 40,
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    // borderWidth: 1,
  },
  date_mark: {
    fontSize: 11,
  },
  venue: {
    fontSize: 13,
  },
});

export default ExhibitionItem;
