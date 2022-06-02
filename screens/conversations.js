import { View } from 'react-native';
import ConversationPreview from '../components/conversationPreview';

const ConversationsScreen = () => {
  return (
    <View>
      <ConversationPreview />
      <ConversationPreview />
      <ConversationPreview />
    </View>
  );
};

export default ConversationsScreen;