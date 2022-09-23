import { Platform } from 'react-native';
import { io } from 'socket.io-client';

if (Platform.OS == 'android') {
  socketEndpoint = "https://real-url-here.io";
  userId = 0;
} else {
  socketEndpoint = "http://localhost:3000"
}

let socket = io(socketEndpoint);

const sendMessage = (message) => {
  socket.emit('messageSent', message);
};

module.exports = {
  sendMessage
};