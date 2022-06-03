import { View } from 'react-native';
import ConversationPreview from '../components/conversationPreview';

const ConversationsScreen = ({ navigation }) => {
  return (
    <View>
      <ConversationPreview navigation={navigation} />
      <ConversationPreview navigation={navigation} />
      <ConversationPreview navigation={navigation} />
    </View>
  );
};

export default ConversationsScreen;