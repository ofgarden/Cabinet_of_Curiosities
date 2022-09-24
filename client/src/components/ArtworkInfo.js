import { View, Text } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

const ArtworkInfo = ({ artworks }) => {
  return (
    <View>
      <FlatList
        data={artworks}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default ArtworkInfo;
