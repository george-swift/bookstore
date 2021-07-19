import renderer from 'react-test-renderer';
import Spinner from '../components/Spinner';

describe('Testing Spinner component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Spinner loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
