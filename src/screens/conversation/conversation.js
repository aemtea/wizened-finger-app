import { View } from 'react-native';
import AddMessage from '../../components/addMessage/addMessage';
import Message from '../../components/message/message';
import styles from './conversation.style';

const ConversationScreen = () => {
  return (
    <View style={styles.container}>
      <Message />
      <Message me={true} />
      <Message />
      <AddMessage />
    </View>
  );
};

export default ConversationScreen;