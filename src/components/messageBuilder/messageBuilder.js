import { useCallback, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import TemplateSelctor from '../templateSelector/templateSelector';
import styles from './messageBuilder.style';

const MessageBuilder = (props) => {
  const [templateSelectorVisible, setTemplateSelectorVisible] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(undefined);

  const onTemplateSelected = useCallback((item) => {
    setSelectedTemplate(item.title);
    setTemplateSelectorVisible(false);
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
      <Text>Words</Text>
      <Button
        title='Add'
      />
      <Text>{selectedTemplate}</Text>
      <Button
        title='Okay'
        onPress={() => {
          props.setModalVisible(false);
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
    </View>
  );
};

export default MessageBuilder;