import { View } from 'react-native';
import ConversationPreview from '../components/conversationPreview';

const ConversationsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ConversationPreview navigation={navigation} />
      <ConversationPreview navigation={navigation} />
      <ConversationPreview navigation={navigation} />
    </View>
  );
};

export default ConversationsScreen;