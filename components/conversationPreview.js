import { Image, Pressable, Text, View } from 'react-native';

const ConversationPreview = (props) => {
  return (
    <View>
      <Pressable onPress={() => props.navigation.navigate('Conversation')}>
        <Image
          style={{
            width: 72,
            height: 72
          }}
          source={{
            uri: 'https://i.imgur.com/B1oKCwK.png'
          }}
        />
        <Text style={{ fontWeight: 'bold' }}>
          Blaidd the Half-Wolf
        </Text>
        <Text>Illusory wall ahead.</Text>
      </Pressable>
    </View>
  );
};

export default ConversationPreview;