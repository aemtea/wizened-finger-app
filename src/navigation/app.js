import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/login';
import ConversationsScreen from '../screens/conversations/conversations';
import ConversationScreen from '../screens/conversation/conversation';

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return <NavigationContainer>
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
  }
}

export default App;