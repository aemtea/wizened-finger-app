import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  previewContainer: {
    flexDirection: 'row',

    textPreview: {
      backgroundColor: 'lightgrey',
      flex: 9
    },
    addButton: {
      flex: 1
    }
  }  
});

export default styles;