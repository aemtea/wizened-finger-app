import renderer from 'react-test-renderer';
import ConversationPreview from './conversationPreview';
import conversations from '../../data/conversations'

describe('<ConversationPreview />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ConversationPreview conversation={conversations[0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});