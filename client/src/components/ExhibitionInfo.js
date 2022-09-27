import React from 'react';
import { Text, View, ScrollView, StyleSheet, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ExhibitionInfo = ({ route }) => {
  const { exhibition } = route.params;

  return (
    <ScrollView>
      <View style={styles.exhibitionContainer}>
        <Text style={styles.title}>{exhibition.title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{exhibition.begindate}</Text>
          {/* <FontAwesome name="caret-right" size={18} color="black" /> */}
          <AntDesign name="caretright" size={12} color="black" />
          <Text style={styles.dateText}>{exhibition.enddate}</Text>
        </View>
        <Text style={styles.textContainer}>
          {/* {'\n'} */}
          {/* {exhibition.people ? (
            <Text>
              Curated by : {exhibition.people.map((item) => item.name)}
            </Text>
          ) : (
            <Text></Text>
          )} */}
          {'\n'}
          <Text style={styles.place}>
            {exhibition.venues.map((item) => item.fullname)}
          </Text>
          {'\n'}
          <Text>{exhibition.venues.map((item) => item.address1)}</Text>
        </Text>
      </View>
      <Text
        style={styles.hyperlinkStyle}
        onPress={() => {
          Linking.openURL(exhibition.url);
        }}
      >
        Visit Website
      </Text>
      <View style={styles.descriptionContainer}>
        {exhibition.textiledescription ? (
          <Text style={styles.descriptionText}>
            {exhibition.textiledescription}
          </Text>
        ) : (
          <Text style={styles.descriptionText}>No description</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  exhibitionContainer: {
    felx: 1,
    marginVertical: 40,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#a9a9a9',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#152238',
    textAlign: 'center',
    padding: 16,
    textShadowColor: 'grey',
    textShadowOpacity: 0.2,
    textShadowOffset: { width: 4, height: 1 },
    textShadowRadius: 4,
  },
  dateContainer: {
    felx: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    width: 220,
    fontFamily: 'Poppins-Regular',
  },
  dateText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
  },
  textContainer: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
    fontSize: 13,
  },
  hyperlinkStyle: {
    paddingHorizontal: 25,
    marginBottom: 4,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 11,
    textAlign: 'right',
    color: '#152238',
  },
  // descriptionContainer: { borderWidth: 1 },
  descriptionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    textAlign: 'justify',
    paddingHorizontal: 25,
    paddingBottom: 25,
  },
});

export default ExhibitionInfo;
