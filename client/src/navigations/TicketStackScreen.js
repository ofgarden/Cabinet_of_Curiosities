import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import TicketScreen from '../screens/TicketScreen';

const Stack = createStackNavigator();

export default function TicketStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#152238',
        },
        headerTitleAlign: 'left',
        headerTintColor: '#FFFFF3',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: '25',
        },
      }}
    >
      <Stack.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          headerRight: () => (
            <Ionicons
              onPress={() => {}}
              name="add-circle-outline"
              size={25}
              color="#FFFFF3"
              style={{ paddingRight: 10 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
