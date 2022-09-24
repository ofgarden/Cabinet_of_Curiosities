/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import TicketScreen from '../screens/TicketScreen';

const Stack = createStackNavigator();

export default function TicketStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ticket" component={TicketScreen} />
    </Stack.Navigator>
  );
}
