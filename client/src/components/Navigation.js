import React from 'react';

// Navigation
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, Dimensions, Button } from 'react-native';

// Screens
import HomeScreen from '../screens/HomeScreen';
import ExhibitionScreen from '../screens/ExhibitionScreen';
import ArtworkScreen from '../screens/ArtworkScreen';
import TicketScreen from '../screens/TicketScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Components
import AddArtwork from '../components/AddArtwork';
import ArtworkInfo from '../components/ArtworkInfo';

// const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function ExhibitionStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen name="Current" component={ExhibitionScreen} />
    </Stack.Navigator>
  );
}

function ArtworkStackScreen() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cabinet"
        component={ArtworkScreen}
        options={{
          // headerTitle:
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddArtwork')}
              title="ICON"
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen name="AddArtwork" component={AddArtwork} />
      <Stack.Screen name="ArtworkInfo" component={ArtworkInfo} />
    </Stack.Navigator>
  );
}

function TicketStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ticket" component={TicketScreen} />
    </Stack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          title: '',
          tabBarActiveTintColor: 'lavender',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            fontSize: 10,
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
          // headerStyle: [
          //   {
          //     backgroundColor: 'transparent',
          //   },
          // ],
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
          name="ExhibitionTab"
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

const styles = StyleSheet.create({
  icons: {
    paddingBottom: 'padding',
  },
});
