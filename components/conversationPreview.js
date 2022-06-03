import { Image, Pressable, Text, View } from 'react-native';

const ConversationPreview = (props) => {
  return (
    <View>
      <Pressable style={{ flexDirection: 'row' }} onPress={() => props.navigation.navigate('Conversation')}>
        <Image
          style={{
            width: 72,
            height: 72
          }}
          source={{
            uri: 'https://i.imgur.com/B1oKCwK.png'
          }}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold' }}>
            Blaidd the Half-Wolf
          </Text>
          <Text>Illusory wall ahead.</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ConversationPreview;