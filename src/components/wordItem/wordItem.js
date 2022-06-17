import { Pressable, Text } from 'react-native';
import styles from './wordItem.style';

const WordItem = (props) => (
  <Pressable
    onPress={() => { props.onWordSelected(props.item) }}>

    <Text style={styles.text}>{props.item.title}</Text>
  </Pressable>
);

export default WordItem;