/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStackScreen({ exhibitionData }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
      }}
    >
      <Stack.Screen name="Home">
        {(props) => <HomeScreen exhibitionData={exhibitionData} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
