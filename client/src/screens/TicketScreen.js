import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
// import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { FaFacePensive } from '@fortawesome/free-solid-svg-icons';

const TicketScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Ticket Screen (refactored)</Text>
      {/* <FontAwesomeIcon icon="FaFacePensive" /> */}
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
