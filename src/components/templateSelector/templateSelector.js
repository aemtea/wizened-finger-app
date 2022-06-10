import { FlatList, SafeAreaView } from 'react-native';
import TemplateItem from '../templateItem/templateItem';
import styles from './templateSelector.style';

const templates = [
  { id: 1, title: '**** ahead' },
  { id: 2, title: 'No **** ahead' },
  { id: 3, title: '**** required ahead' },
  { id: 4, title: 'Be wary of ****' },
  { id: 5, title: 'Try ****' },
  { id: 6, title: 'Likely ****' },
  { id: 7, title: 'First off, ****' },
  { id: 8, title: 'Seek ****' },
  { id: 9, title: 'Still no ****…' },
  { id: 10, title: 'Why is it always ****?' },
  { id: 11, title: 'If only I had a ****?' },
  { id: 12, title: 'Didn \'t expect ****…' },
  { id: 13, title: 'Visions of ****…' },
  { id: 14, title: 'Could this be a ****?' },
  { id: 15, title: 'Time for ****' },
  { id: 16, title: '**** O, ****' },
  { id: 17, title: 'Behold, ****!' },
  { id: 18, title: 'Offer ****' },
  { id: 19, title: 'Praise the ****!' },
  { id: 20, title: 'Let there be ****' },
  { id: 21, title: 'Ahh, ****…' },
  { id: 22, title: '****' },
  { id: 23, title: '****!' },
  { id: 24, title: '****?' },
  { id: 25, title: '****…' },
];

const TemplateSelctor = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={templates}
        renderItem={({ item }) => <TemplateItem item={item} onTemplateSelected={props.onTemplateSelected} />}
      />
    </SafeAreaView>
  );
};

export default TemplateSelctor;