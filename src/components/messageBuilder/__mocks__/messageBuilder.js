import { Button, View } from 'react-native';
import messages from '../../../data/messages';

const MessageBuilder = (props) => {
  return (
    <View>
      <Button
        title="Bob"
        onPress={() => props.onMessageBuilt(messages[0].content)} />
    </View>
  );
}
export default MessageBuilder;