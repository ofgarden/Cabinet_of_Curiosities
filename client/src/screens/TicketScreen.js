import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const TicketScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Ticket Screen (refactored)</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TicketScreen;
