import { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import MessageBuilder from '../messageBuilder/messageBuilder';
import styles from './addMessage.style';

const AddMessage = () => {
  const [messageBuilderVisible, setMessageBuilderVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        <Text style={styles.previewContainer.textPreview} />
        <View style={styles.previewContainer.addButton}>
          <Button
            title="+"
            onPress={() => {
              setMessageBuilderVisible(true);
            }}
          />
        </View>
      </View>
      <Modal
        animationType="fade"
        visible={messageBuilderVisible}
        onRequestClose={() => {
          setMessageBuilderVisible(false);
        }}
      >
        <MessageBuilder setModalVisible={setMessageBuilderVisible} />
      </Modal>
    </View>
  )
};

export default AddMessage;