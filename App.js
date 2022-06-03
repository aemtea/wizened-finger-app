import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login';
import ConversationsScreen from './screens/conversations';
import ConversationScreen from './screens/conversation';

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
        <Stack.Screen
          name="Conversation"
          component={ConversationScreen}
          options={{
            title: 'Blaidd the Half-Wolf'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}