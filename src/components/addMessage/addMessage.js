import { useCallback, useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import MessageBuilder from '../messageBuilder/messageBuilder';
import styles from './addMessage.style';

const AddMessage = () => {
  const [messageBuilderVisible, setMessageBuilderVisible] = useState(false);
  const onMessageBuilt = useCallback(() => {
    setMessageBuilderVisible(false);
  });

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
        transparent={true}
        animationType="fade"
        visible={messageBuilderVisible}
        onRequestClose={() => {
          setMessageBuilderVisible(false);
        }}
      >
        <MessageBuilder onMessageBuilt={onMessageBuilt} />
      </Modal>
    </View>
  )
};

export default AddMessage;