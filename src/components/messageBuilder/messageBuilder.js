import { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import TemplateSelctor from '../templateSelector/templateSelector';
import styles from './messageBuilder.style';

const MessageBuilder = (props) => {
  const [templateSelectorVisible, setTemplateSelectorVisible] = useState(false);

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
        <TemplateSelctor />
      </Modal>
    </View>
  );
};

export default MessageBuilder;