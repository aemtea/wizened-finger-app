import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConversationsScreen from './screens/conversations';
import LoginScreen from './screens/login';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Wizened Finger'
          }}
        />
        <Stack.Screen
          name="Conversations"
          component={ConversationsScreen}
          options={{
            title: 'Wizened Finger',
            headerRight: () => (
              <Button
                title="Filter" />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}