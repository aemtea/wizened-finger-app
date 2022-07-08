import { Button, View } from 'react-native';
import templates from '../../../data/templates';
import words from '../../../data/words'

const message = {
  template: templates[0],
  word: words[0]
};

const MessageBuilder = (props) => {
  return (
    <View>
      <Button
        title="Bob"
        onPress={() => props.onMessageBuilt(message)} />
    </View>
  );
}
export default MessageBuilder;