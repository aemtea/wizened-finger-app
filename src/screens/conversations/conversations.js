import { View } from 'react-native';
import ConversationPreview from '../../components/conversationPreview/conversationPreview';
import styles from './conversations.style';

const ConversationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ConversationPreview navigation={navigation} />
      <ConversationPreview navigation={navigation} />
      <ConversationPreview navigation={navigation} />
    </View>
  );
};

export default ConversationsScreen;