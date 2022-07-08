import { useCallback, useState } from 'react';
import { View } from 'react-native';
import AddMessage from '../../components/addMessage/addMessage';
import Message from '../../components/message/message';
import styles from './conversation.style';

const ConversationScreen = () => {
  const [messages, setMessages] = useState([]);

  const onMessageAdded = useCallback((message) => {
    setMessages((messages) => ([...messages, message]));
  });

  return (
    <View style={styles.container}>
      {messages.map((message, key) => {
        return (
          <Message key={key} message={message} me={key % 2 == 0} />
        )
      })}

      <AddMessage onMessageAdded={onMessageAdded} />
    </View>
  );
};

export default ConversationScreen;