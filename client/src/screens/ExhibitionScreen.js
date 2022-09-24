/* eslint-disable no-shadow */
/* eslint-disable no-catch-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import axios from 'axios';
import { BASE_URL, API_KEY } from '@env';
import { FlatList } from 'react-native-gesture-handler';

const ExhibitionScreen = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setError(null);
      // setData(null); // PROBLEM DONOTUSE
      setLoading(true);

      const response = await axios.get(BASE_URL, {
        params: {
          // serviceKey: API_KEY,
          numOfRows: 1,
          pageNo: 1,
        },
      });
      setData(response.data);
      console.log('data', data);
    } catch (error) {
      console.log('[ERROR]');
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log('data', data.response.body);
  // console.log('.response.body', data.response.body);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.contentContainer}>
        TODO: SPECIFIC INFORMATION FROM API
      </Text>
      <Text>TODO: AVOID OVERWARP HEADER</Text>
      {/* <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          <Text>{item.response.body.items.item.title}</Text>;
        }}
      /> */}
      {/* <Text>{data.response.body.items.item}</Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // contentContainer: {
  //   marginTop: 141,
  // },
});

export default ExhibitionScreen;
