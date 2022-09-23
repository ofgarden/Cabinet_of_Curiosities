import React from 'react';

// Navigation
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import { StyleSheet, Dimensions, Button } from 'react-native';

// Screens
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ExhibitionScreen from '../screens/ExhibitionScreen';
import ArtworkScreen from '../screens/ArtworkScreen';
import TicketScreen from '../screens/TicketScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Components
import AddArtwork from '../components/AddArtwork';

// const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function ExhibitionStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Exhibition" component={ExhibitionScreen} />
    </Stack.Navigator>
  );
}

function ArtworkStackScreen() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      {/* screenOptions={{ headerShown: false }} */}
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
    </Stack.Navigator>
  );
}

function TicketStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Ticket" component={TicketScreen} />
    </Stack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
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
          headerStyle: [
            {
              backgroundColor: 'transparent',
            },
          ],
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="A"
          component={HomeStackScreen}
          options={{
            // headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="B"
          component={ExhibitionStackScreen}
          options={{
            tabBarLabel: 'Current',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="C"
          component={ArtworkStackScreen}
          options={{
            tabBarLabel: 'Cabinet',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="D"
          component={TicketStackScreen}
          options={{
            tabBarLabel: 'Ticket',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="E"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
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
