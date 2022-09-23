import { useCallback, useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import AddMessage from '../../components/addMessage/addMessage';
import Message from '../../components/message/message';
import styles from './conversation.style';
import messages from '../../data/messages';
import { io } from 'socket.io-client';

let socketEndpoint;
let userId;
if (Platform.OS == 'android') {
  socketEndpoint = "https://real-url-here.io";
  userId = 0;
} else {
  socketEndpoint = "http://localhost:3000"
  userId = 1;
}


let socket = null;

const ConversationScreen = ({navigation, route}) => {
  const conversationId = route.params.conversation.id;
  var initialMessages = messages.filter(message => message.conversationId == conversationId);

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

    socket.on(`messageReceived:${conversationId}`, (message) => {
      console.log("message received");

      if (message.senderId != userId) {
        setConversationMessages((conversationMessages) => ([...conversationMessages, message]));
      }
    });

    return function cleanup() {
      socket.off("connect_error");
      socket.off("connect");
      socket.off("disconnect");
      socket.off(`messageReceived:${conversationId}`);
    }
  });

  const onMessageAdded = useCallback((content) => {
    var message = {
      conversationId: conversationId,
      senderId: userId,
      content: content
    };

    socket.emit('messageSent', message);

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