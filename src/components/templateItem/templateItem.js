import { Pressable, Text } from 'react-native';
import styles from './templateItem.style';

const TemplateItem = (props) => (
  <Pressable
    onPress={() => { props.onTemplateSelected(props.item) }}>

    <Text style={styles.text}>{props.item.title}</Text>
  </Pressable>
);

export default TemplateItem;