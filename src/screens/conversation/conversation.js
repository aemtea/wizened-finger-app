import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import AddMessage from '../../components/addMessage/addMessage';
import Message from '../../components/message/message';
import styles from './conversation.style';
import messages from '../../data/messages';
import { io } from 'socket.io-client';

const socketEndpoint = "http://localhost:3000";
let socket = null;

const ConversationScreen = ({navigation, route}) => {
  var initialMessages = messages.filter(message => message.conversationId == route.params.conversation.id);

  const [conversationMessages, setConversationMessages] = useState(initialMessages);

  useEffect(() => {
    socket = io(socketEndpoint);

    socket.on("connect_error", (error) => {
      console.log(error.message + " on " + socketEndpoint)
    });

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("disconnect", (reason) => {
      console.log("disconnected");
    });

    return function cleanup() {
      socket.off("connect_error");
      socket.off("connect");
      socket.off("disconnect");
    }
  });

  const onMessageAdded = useCallback((message) => {
    socket.emit('chat message', message);

    setConversationMessages((conversationMessages) => ([...conversationMessages, {content: message}]));
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