import { useCallback, useState } from 'react';
import { View } from 'react-native';
import AddMessage from '../../components/addMessage/addMessage';
import Message from '../../components/message/message';
import styles from './conversation.style';
import messages from '../../data/messages';

const ConversationScreen = ({navigation, route}) => {
  var initialMessages = messages.filter(message => message.conversationId == route.params.conversation.id);

  const [conversationMessages, setConversationMessages] = useState(initialMessages);

  const onMessageAdded = useCallback((message) => {
    setConversationMessages((conversationMessages) => ([...conversationMessages, message]));
  });

  return (
    <View style={styles.container}>
      {conversationMessages.map((message, key) => {
        return (
          <Message key={key} message={message} me={key % 2 == 0} />
        )
      })}

      <AddMessage onMessageAdded={onMessageAdded} />
    </View>
  );
};

export default ConversationScreen;