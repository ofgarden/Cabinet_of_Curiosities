/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-catch-shadow */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';

import { getExhibitions } from '../services/exhibitionService';

import ExhibitionItem from '../components/ExhibitionItem';

const ExhibitionScreen = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);

      const result = await getExhibitions();
      setData(result);
    } catch (error) {
      console.log('[ERROR]', error);
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // console.log(data);
  }, []);

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'FFFFF3' }}>
        {/* <Text>TODO: AVOID OVERWARP HEADER</Text> */}
        <FlatList
          data={data.records}
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
