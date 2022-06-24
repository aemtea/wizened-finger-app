import { Pressable, Text } from 'react-native';
import styles from './categoryItem.style';

const CategoryItem = (props) => (
  <Pressable
    onPress={() => { props.onCategorySelected(props.item) }}>

    <Text style={styles.text}>{props.item.title}</Text>
  </Pressable>
);

export default CategoryItem;