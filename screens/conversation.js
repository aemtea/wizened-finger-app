import { View } from 'react-native';
import AddMessage from '../components/addMessage';
import Message from '../components/message';

const ConversationScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Message />
      <Message me={true} />
      <Message />
      <AddMessage />
    </View>
  );
};

export default ConversationScreen;