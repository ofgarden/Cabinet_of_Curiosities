/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stacks
import ExhibitionStackScreen from '../navigations/ExhibitionStackScreen';
import ArtworkStackScreen from '../navigations/ArtworkStackScreen';
import HomeStackScreen from '../navigations/HomeStackScreen';
import TicketStackScreen from '../navigations/TicketStackScreen';
import ProfileStackScreen from '../navigations/ProfileStackScreen';

import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

// import { Dimensions } from 'react-native';
// const fullScreenWidth = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          title: '',
          tabBarActiveTintColor: '#FFFFF3',
          tabBarInactiveTintColor: '#D9D9D9',
          tabBarLabelStyle: { fontSize: 10 },
          tabBarStyle: [{ display: 'flex', backgroundColor: '#152238' }, null],
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="current"
          component={ExhibitionStackScreen}
          options={{
            // tabBarLabel: 'Current',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="museum" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ArtworkTab"
          component={ArtworkStackScreen}
          options={{
            // tabBarLabel: 'Cabinet',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="color-palette" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="TicketTab"
          component={TicketStackScreen}
          options={{
            // tabBarLabel: 'Ticket',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="ticket-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileStackScreen}
          options={{
            // tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-settings-sharp" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
