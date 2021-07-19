import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render, within } from '@testing-library/react';
import CategoryFilter from '../components/CategoryFilter';

describe('Testing the category Filter component', () => {
  const changeFilter = jest.fn(() => {});

  it('should render correctly', () => {
    const tree = renderer
      .create(<CategoryFilter filterCategory={changeFilter} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display categories in option elements', () => {
    const { getByText } = render(<CategoryFilter filterCategory={changeFilter} />);
    const select = document.querySelector('.form-select');
    const options = within(select).getAllByRole('option');
    expect(options).toHaveLength(8);
    expect(getByText('All')).toBeInTheDocument();
    expect(getByText('Biography')).toBeInTheDocument();
  });
});
