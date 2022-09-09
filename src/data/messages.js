import { formatMessage } from '../helpers/messageHelpers';
import templates from './templates';
import words from './words'

const messages = [
  {
    conversationId: 0,
    senderId: 1,
    content: formatMessage(templates[0], words[0])
  }
];

export default messages;