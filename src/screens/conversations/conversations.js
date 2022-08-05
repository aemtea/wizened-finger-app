import { View } from 'react-native';
import ConversationPreview from '../../components/conversationPreview/conversationPreview';
import styles from './conversations.style';
import conversations from '../../data/conversations';

const ConversationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {conversations.map((conversation, key) => {
        return (
          <ConversationPreview key={key} conversation={conversation} navigation={navigation} />
        )
      })}
    </View>
  );
};

export default ConversationsScreen;