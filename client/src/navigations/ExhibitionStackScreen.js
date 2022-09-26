/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import ExhibitionScreen from '../screens/ExhibitionScreen';
import ExhibitionInfo from '../components/ExhibitionInfo';

const Stack = createStackNavigator();

export default function ExhibitionStackScreen({ exhibitionData }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#152238',
        },
        headerBackImage: () => (
          <Ionicons
            name="ios-chevron-back"
            size={25}
            color="white"
            style={{ paddingLeft: 10 }}
          />
        ),
        headerBackTitleVisible: false,
        headerTitleAlign: 'left',
        headerTintColor: '#FFFFF3',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: '25',
        },
      }}
    >
      <Stack.Screen name="Current">
        {(props) => <ExhibitionScreen exhibitionData={exhibitionData} />}
      </Stack.Screen>
      <Stack.Screen
        name="ExhibitionInfo"
        component={ExhibitionInfo}
        options={{ headerTitle: '' }}
      />
    </Stack.Navigator>
  );
}
