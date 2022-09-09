import { useCallback, useEffect, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import ItemSelector from '../itemSelector/itemSelector';
import styles from './messageBuilder.style';
import { formatMessage } from '../../helpers/messageHelpers';
import templates from '../../data/templates';
import categories from '../../data/categories';
import words from '../../data/words';

const MessageBuilder = (props) => {
  const [templateSelectorVisible, setTemplateSelectorVisible] = useState(false);
  const [categorySelectorVisible, setCategorySelectorVisible] = useState(false);
  const [wordSelectorVisible, setWordSelectorVisible] = useState(false);

  const [selectedTemplate, setSelectedTemplate] = useState(undefined);
  const [selectedWord, setSelectedWord] = useState(undefined);
  const [builtMessage, setBuiltMessage] = useState('');
  const [filteredWords, setFilteredWords] = useState([]);

  const onItemSelected = useCallback((item) => {
    switch (item.type) {
      case 'template':
        onTemplateSelected(item);
        break;
      case 'category':
        onCategorySelected(item);
        break;
      case 'word':
        onWordSelected(item);
    }
  });

  const onTemplateSelected = useCallback((template) => {
    setSelectedTemplate(template);
    setTemplateSelectorVisible(false);
  });

  const onCategorySelected = useCallback((category) => {
    setWordSelectorVisible(true);
    setFilteredWords(words.filter(word => word.category == category.title));
  });

  const onWordSelected = useCallback((word) => {
    setSelectedWord(word);
    setWordSelectorVisible(false);
    setCategorySelectorVisible(false);
  });

  useEffect(() => {
    if (selectedTemplate && selectedWord) {
      setBuiltMessage(formatMessage(selectedTemplate, selectedWord));
    }
  });

  return (
    <View style={styles.container}>
      <Text>Templates</Text>
      <Button
        title='Add'
        onPress={() => {
          setTemplateSelectorVisible(true);
        }}
      />
      <Text>{selectedTemplate ? selectedTemplate.title : ''}</Text>
      <Text>Words</Text>
      <Button
        title='Add'
        onPress={() => {
          setCategorySelectorVisible(true);
        }}
      />
      <Text>{selectedWord ? selectedWord.title : ''}</Text>
      <Text>{builtMessage}</Text>
      <Button
        title='Finish'
        onPress={() => {
          props.onMessageBuilt(builtMessage);
        }}
      />

      <Modal
        transparent={true}
        animationType="fade"
        visible={templateSelectorVisible}
        onRequestClose={() => {
          setTemplateSelectorVisible(false);
        }}>
        <ItemSelector data={templates} onItemSelected={onItemSelected} />
      </Modal>
      <Modal
        transparent={true}
        animationType="fade"
        visible={categorySelectorVisible}
        onRequestClose={() => {
          setCategorySelectorVisible(false);
        }}>
        <ItemSelector data={categories} onItemSelected={onItemSelected} />
      </Modal>
      <Modal
        transparent={true}
        animationType="fade"
        visible={wordSelectorVisible}
        onRequestClose={() => {
          setWordSelectorVisible(false);
        }}>
        <ItemSelector data={filteredWords} onItemSelected={onItemSelected} />
      </Modal>
    </View>
  );
};

export default MessageBuilder;