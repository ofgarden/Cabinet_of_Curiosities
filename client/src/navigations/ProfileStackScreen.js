/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../components/EditProfile';

const Stack = createStackNavigator();

export default function ProfileStackScreen() {
  const navigation = useNavigation();
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
        headerBackImage: () => (
          <Ionicons
            name="ios-chevron-back"
            size={25}
            color="#FFFFF3"
            style={{ paddingLeft: 10 }}
          />
        ),
      }}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // headerTitle: `Cabinet  ${numberOfArtworks}`,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => (
            <FontAwesome5
              onPress={() => navigation.navigate('EditProfile')}
              name="user-edit"
              size={18}
              color="#FFFFF3"
              style={{ paddingRight: 10 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
