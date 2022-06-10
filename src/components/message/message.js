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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum magna est, vel cursus tortor vestibulum et. Quisque egestas, tortor.
      </Text>
    </View>
  );
};

export default Message;