import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

const ExhibitionInfo = ({ route }) => {
  const { exhibition } = route.params;

  // console.log('Exhibtiion ', exhibition);
  // console.log('Exhibition from Info', exhibition.venues.name);

  return (
    <ScrollView>
      <Text>{exhibition.title}</Text>
      <Text>{exhibition.url}</Text>
      <Text>{exhibition.venues.name}</Text>
      {exhibition.textiledescription ? (
        <Text>{exhibition.textiledescription}</Text>
      ) : (
        <Text>No description</Text>
      )}
    </ScrollView>
  );
};

export default ExhibitionInfo;
