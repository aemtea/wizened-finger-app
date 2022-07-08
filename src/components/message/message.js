import { Image, Text, View } from 'react-native';
import styles from './message.style';

const Message = (props) => {
  return (
    <View style={[styles.container, props.me ? styles.senderContainer : styles.receiverContainer]}>
      <Image
        style={styles.icon}
        source={{ uri: 'https://i.imgur.com/B1oKCwK.png' }}
      />
      <Text style={styles.text}>
        {props.message.template.title.split("****").join(props.message.word.title)}
      </Text>
    </View>
  );
};

export default Message;