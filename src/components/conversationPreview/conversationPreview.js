import { Image, Pressable, Text, View } from 'react-native';
import styles from './conversationPreview.style';

const ConversationPreview = (props) => {
  return (
    <View>
      <Pressable
        style={styles.previewContainer}
        onPress={() => props.navigation.navigate('Conversation')}>

        <Image
          style={styles.icon}
          source={{
            uri: 'https://i.imgur.com/B1oKCwK.png'
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Blaidd the Half-Wolf
          </Text>
          <Text>Illusory wall ahead.</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ConversationPreview;