import { Image, Text, View } from 'react-native';
import styles from './message.style';
import { formatMessage } from '../../helpers/messageHelpers';

const Message = (props) => {
  return (
    <View style={[styles.container, props.me ? styles.senderContainer : styles.receiverContainer]}>
      <Image
        style={styles.icon}
        source={{ uri: 'https://i.imgur.com/B1oKCwK.png' }}
      />
      <Text style={styles.text}>
        {props.message.content}
      </Text>
    </View>
  );
};

export default Message;