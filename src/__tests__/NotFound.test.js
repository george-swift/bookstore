import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../components/NotFound';

describe('Testing NotFound component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Router><NotFound /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
