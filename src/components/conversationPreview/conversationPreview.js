import { Image, Pressable, Text, View } from 'react-native';
import styles from './conversationPreview.style';
import { formatMessage } from '../../helpers/messageHelpers';
import users from '../../data/users';
import messages from '../../data/messages';

const ConversationPreview = (props) => {
  var notMyUser = props.conversation.partyIds.filter(id => id != 0)[0];
  var user = users.filter(user => user.id == notMyUser)[0];

  var conversationMessages = messages.filter(message => message.conversationId == props.conversation.id && message.senderId != 0);
  var lastMessage = conversationMessages[conversationMessages.length - 1];
  var lastMessageContent = formatMessage(lastMessage.content.template, lastMessage.content.word);

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