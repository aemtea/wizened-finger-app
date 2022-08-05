import { FlatList, SafeAreaView } from 'react-native';
import SelectableItem from '../selectableItem/selectableItem';
import styles from './itemSelector.style';

const ItemSelector = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <SelectableItem item={item} onItemSelected={props.onItemSelected} />}
      />
    </SafeAreaView>
  );
};

export default ItemSelector;