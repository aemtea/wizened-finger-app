import { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import TemplateSelction from './templateSelection';

const AddMessage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [templateSelectionModalVisible, setTemplateSelectionModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>


      <View style={{ flexDirection: 'row' }}>
        <Text style={{ backgroundColor: 'lightgrey', flex: 9 }} />
        <View style={{ flex: 1 }}>
          <Button
            title="+"
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>
      </View>
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
        }}>
          <Text>Templates</Text>
          <Button
            title='Add'
            onPress={() => {
              setTemplateSelectionModalVisible(true);
            }}
          />
          <Text>Words</Text>
          <Button
            title='Add'
          />
          <Button
            title='Okay'
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
      <Modal
        animationType="fade"
        visible={templateSelectionModalVisible}
        onRequestClose={() => {
          setTemplateSelectionModalVisible(false);
        }}>
        <TemplateSelction />
      </Modal>
    </View>
  )
};

export default AddMessage;