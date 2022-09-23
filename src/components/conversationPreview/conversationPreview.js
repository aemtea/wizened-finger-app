import { useEffect, useState } from 'react';
import { Image, Platform, Pressable, Text, View } from 'react-native';
import { io } from 'socket.io-client';
import styles from './conversationPreview.style';
import { formatMessage } from '../../helpers/messageHelpers';
import users from '../../data/users';
import messages from '../../data/messages';

let socketEndpoint;
if (Platform.OS == 'android') {
  socketEndpoint = "https://real-url-here.io";
} else {
  socketEndpoint = "http://localhost:3000"
}

let socket = null;

const ConversationPreview = (props) => {
  var notMyUser = props.conversation.partyIds.filter(id => id != 0)[0];
  var user = users.filter(user => user.id == notMyUser)[0];

  var conversationMessages = messages.filter(message => message.conversationId == props.conversation.id && message.senderId != 0);
  var lastMessage = conversationMessages[conversationMessages.length - 1];

  const [lastMessageContent, setlastMessageContent] = useState(lastMessage.content);

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

    socket.on(`messageReceived:${lastMessage.conversationId}`, (message) => {
      console.log("message received: " + message.content);

      setlastMessageContent(message.content);
    });

    return function cleanup() {
      socket.off("connect_error");
      socket.off("connect");
      socket.off("disconnect");
      socket.off(`messageReceived:${lastMessage.conversationId}`);
    }
  });

  return (
    <View>
      <Pressable
        style={styles.previewContainer}
        onPress={() => props.navigation.navigate('Conversation', {conversation: props.conversation})}>

        <Image
          style={styles.icon}
          source={{
            uri: user ? user.iconSrc : 'https://i.gifer.com/ZZ5H.gif'
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {user ? user.username : ''}
          </Text>
          <Text>{lastMessageContent}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ConversationPreview;