import { Pressable, Text } from 'react-native';
import styles from './selectableItem.style';

const SelectableItem = (props) => (
  <Pressable
    onPress={() => { props.onItemSelected(props.item) }}>

    <Text style={styles.text}>{props.item.title}</Text>
  </Pressable>
);

export default SelectableItem;