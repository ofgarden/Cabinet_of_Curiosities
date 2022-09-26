/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
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
      <Stack.Screen name="ExhibitionInfo" component={ExhibitionInfo} />
    </Stack.Navigator>
  );
}
