import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { render, within } from '@testing-library/react';
import { UnconnectedBooksForm } from '../containers/BooksForm';

describe('Testing the BooksForm component', () => {
  const stubAction = () => ({
    type: 'CREATE_BOOK_REQUESTED',
    payload: {},
  });

  beforeEach(() => render(<UnconnectedBooksForm createBookRequested={stubAction} />));

  it('should render correctly when passed props', () => {
    const tree = renderer
      .create(<UnconnectedBooksForm createBookRequested={stubAction} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render the add book form', () => {
    const formWrapper = document.querySelector('.wrap-form');
    const formH3 = within(formWrapper).getByText('Add new book');
    expect(formH3).toBeInTheDocument();
  });

  it('should have an input field for book title in the form', () => {
    const form = document.querySelector('.bookform');
    const titleInput = within(form).getByPlaceholderText('Book title');
    expect(titleInput).toBeInTheDocument();
  });

  it('should have a select element with book categories', () => {
    const formSelect = document.querySelector('.form-select');
    const defaultValue = within(formSelect).getByText('Category');
    expect(defaultValue).toBeInTheDocument();
    const categoryOption = within(formSelect).getByText('Sci-Fi');
    expect(categoryOption).toBeInTheDocument();
  });
});
