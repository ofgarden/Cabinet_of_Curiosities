import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const ExhibitionItem = ({ exhibition }) => {
  const { title, poster } = exhibition;

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={{ uri: poster.imageurl }}
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
    paddingHorizontal: 18,
  },
  items: {
    flex: 1,
    width: Dimensions.get('window').width - 35,
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
