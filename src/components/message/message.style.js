import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
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
    width: '60%'
  }
});

export default styles;