import { View, Text } from 'react-native';
import React from 'react';

const ExhibitionInfo = ({ title, venues }) => {
  console.log('title', title);
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default ExhibitionInfo;
