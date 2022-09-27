import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image } from 'react-native';

const TicketScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/images/work-in-progress-flaticon.png')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
});

export default TicketScreen;
