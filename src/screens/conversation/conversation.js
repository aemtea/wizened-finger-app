import { useCallback, useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import messageManager from '../../managers/messageManager'
import AddMessage from '../../components/addMessage/addMessage';
import Message from '../../components/message/message';
import styles from './conversation.style';
import messages from '../../data/messages';

let socketEndpoint;
let userId;
if (Platform.OS == 'android') {
  socketEndpoint = "https://real-url-here.io";
  userId = 0;
} else {
  socketEndpoint = "http://localhost:3000"
  userId = 1;
}

const ConversationScreen = ({navigation, route}) => {
  const conversationId = route.params.conversation.id;
  var initialMessages = messages.filter(message => message.conversationId == conversationId);

  const [conversationMessages, setConversationMessages] = useState(initialMessages);

  useEffect(() => {   
    messageManager.onMessageReceived(conversationId, (message) => {
      if (message.senderId != userId) {
        setConversationMessages((conversationMessages) => ([...conversationMessages, message]));
      }
    });
  });

  const onMessageAdded = useCallback((content) => {
    var message = {
      conversationId: conversationId,
      senderId: userId,
      content: content
    };

    messageManager.sendMessage(message);

    setConversationMessages((conversationMessages) => ([...conversationMessages, message]));
  });

  return (
    <View style={styles.container}>
      {conversationMessages.map((message, key) => {
        return (
          <Message key={key} message={message} me={message.senderId == userId} />
        )
      })}

      <AddMessage onMessageAdded={onMessageAdded} />
    </View>
  );
};

export default ConversationScreen;