import React from 'react';
import {
  Text,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import HomeItem from '../components/HomeItem';

const HomeScreen = ({ exhibitionData }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Hello,{'\n'}Collector</Text>
      <Text style={styles.text}>Highlights</Text>
      <View style={styles.exhibition_container}>
        <FlatList
          horizontal
          data={exhibitionData.records}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) =>
            item.poster && <HomeItem key={item.id} exhibition={item} />
          }
          snapToAlignment="start"
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').width}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
  },
  welcome: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 35,
    color: '#152238',
    marginTop: 30,
    marginBottom: 35,
    marginLeft: 30,
  },
  text: {
    marginBottom: 7,
    marginRight: 30,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'right',
  },
  exhibition_container: {
    alignSelf: 'center',
    height: Dimensions.get('window').height - 350,
    borderRadius: 20,
  },
});

export default HomeScreen;
