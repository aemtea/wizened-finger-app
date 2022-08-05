import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  senderContainer : {
    justifyContent: 'flex-end'
  },
  receiverContainer: {
    justifyContent: 'flex-start'
  },
  icon: {
    height: 50,
    width: 50
  },
  text: {
    backgroundColor: 'blue',
    color: 'white',
    maxWidth: '70%'
  }
});

export default styles;