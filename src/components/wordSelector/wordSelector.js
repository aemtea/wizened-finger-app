import { FlatList, SafeAreaView } from 'react-native';
import WordItem from '../wordItem/wordItem';
import styles from './wordSelector.style';
import words from '../../data/words';

const WordSelector = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={words}
        renderItem={({ item }) => <WordItem item={item} onWordSelected={props.onWordSelected} />}
      />
    </SafeAreaView>
  );
};

export default WordSelector;