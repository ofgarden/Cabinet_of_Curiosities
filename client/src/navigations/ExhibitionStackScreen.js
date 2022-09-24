/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import ExhibitionScreen from '../screens/ExhibitionScreen';

const Stack = createStackNavigator();

export default function ExhibitionStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen name="Current" component={ExhibitionScreen} />
    </Stack.Navigator>
  );
}
