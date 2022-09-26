/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-catch-shadow */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, Dimensions } from 'react-native';

import { getExhibitions } from '../services/exhibitionService';

import ExhibitionItem from '../components/ExhibitionItem';

const ExhibitionScreen = ({ exhibitionData }) => {
  // console.log('from Exhibition Screen', exhibitionData);
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'FFFFF3' }}>
        {/* <Text>TODO: AVOID OVERWARP HEADER</Text> */}
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
