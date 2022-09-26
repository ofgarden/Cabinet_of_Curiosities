import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

const ExhibitionInfo = ({ route }) => {
  const { exhibition } = route.params;

  console.log('Exhibtiion ', exhibition);

  return (
    <ScrollView>
      <Text>{exhibition.title}</Text>
      <Text>{exhibition.url}</Text>
      <Text>
        {exhibition.textiledescription ? (
          <Text>{exhibition.textiledescription}</Text>
        ) : (
          <Text>No description</Text>
        )}
      </Text>
    </ScrollView>
  );
};

export default ExhibitionInfo;
