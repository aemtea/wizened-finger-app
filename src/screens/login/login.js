import { Button, TextInput, View } from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <TextInput
        placeholder='Username or email' />
      <TextInput
        placeholder='Password'
        secureTextEntry={true} />
      <Button
        title='Login'
        onPress={() => navigation.navigate('Conversations')} />
    </View>
  );
};

export default LoginScreen;