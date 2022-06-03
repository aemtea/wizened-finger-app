import { Image, Text, View } from 'react-native';

const Message = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: props.me ? 'flex-end' : 'flex-start' }}>
      <Image
        style={{ height: 50, width: 50, }}
        source={{ uri: 'https://i.imgur.com/B1oKCwK.png' }}
      />
      <Text style={{ backgroundColor: 'blue', color: 'white', width: '60%' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum magna est, vel cursus tortor vestibulum et. Quisque egestas, tortor.
      </Text>
    </View>
  );
};

export default Message;