import { useCallback, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import TemplateSelctor from '../templateSelector/templateSelector';
import WordSelector from '../wordSelector/wordSelector'
import styles from './messageBuilder.style';

const MessageBuilder = (props) => {
  const [templateSelectorVisible, setTemplateSelectorVisible] = useState(false);
  const [wordSelectorVisible, setWordSelectorVisible] = useState(false);

  const [selectedTemplate, setSelectedTemplate] = useState(undefined);
  const [selectedWord, setSelectedWord] = useState(undefined);

  const onTemplateSelected = useCallback((item) => {
    setSelectedTemplate(item.title);
    setTemplateSelectorVisible(false);
  });

  const onWordSelected = useCallback((item) => {
    setSelectedWord(item.title);
    setWordSelectorVisible(false);
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
      <Text>{selectedTemplate}</Text>
      <Text>Words</Text>
      <Button
        title='Add'
        onPress={() => {
          setWordSelectorVisible(true);
        }}
      />
      <Text>{selectedWord}</Text>
      <Button
        title='Okay'
        onPress={() => {
          props.onMessageBuilt();
        }}
      />
      <Modal
        animationType="fade"
        visible={templateSelectorVisible}
        onRequestClose={() => {
          setTemplateSelectorVisible(false);
        }}>
        <TemplateSelctor onTemplateSelected={onTemplateSelected} />
      </Modal>
      <Modal
        animationType="fade"
        visible={wordSelectorVisible}
        onRequestClose={() => {
          setWordSelectorVisible(false);
        }}>
        <WordSelector onWordSelected={onWordSelected} />
      </Modal>
    </View>
  );
};

export default MessageBuilder;