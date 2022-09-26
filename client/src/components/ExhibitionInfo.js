import { View, Text } from 'react-native';
import React from 'react';

const ExhibitionInfo = ({ route }) => {
  // console.log('title', title);
  const { exhibition } = route.params;

  return (
    <View>
      <Text>{exhibition.title}</Text>
    </View>
  );
};

export default ExhibitionInfo;
