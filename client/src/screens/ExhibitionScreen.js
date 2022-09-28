import React from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';

import ExhibitionItem from '../components/ExhibitionItem';

const ExhibitionScreen = ({ exhibitionData }) => {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'FFFFF3' }}>
        <FlatList
          data={exhibitionData.records}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return <ExhibitionItem key={item.id} exhibition={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ExhibitionScreen;
