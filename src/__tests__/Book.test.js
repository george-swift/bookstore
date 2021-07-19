import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, within } from '@testing-library/react';
import Book from '../components/Book';

describe('Testing the Book Component', () => {
  const book = {
    id: 101,
    title: 'Test Book',
    category: 'Learning',
  };

  const editBook = jest.fn(() => {});
  const removeBook = jest.fn(() => {});

  beforeEach(() => render(
    <Router>
      <Book book={book} editBook={editBook} removeBook={removeBook} />
    </Router>,
  ));

  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Book book={book} editBook={editBook} removeBook={removeBook} />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have book title in info section', () => {
    const bookInfo = document.querySelector('.details');
    const testBookTitle = within(bookInfo).getByText('Test Book');
    expect(testBookTitle).toBeInTheDocument();
  });

  it('should have book category in info section', () => {
    const bookInfo = document.querySelector('.details');
    const testBookCategory = within(bookInfo).getByText('Learning');
    expect(testBookCategory).toBeInTheDocument();
  });

  it('should have author placeholder in info section by default', () => {
    const bookInfo = document.querySelector('.details');
    const placeholder = within(bookInfo).getByText('Click Edit to add author');
    expect(placeholder).toBeInTheDocument();
  });

  it('should have action button for comments', () => {
    const bookInfo = document.querySelector('.action');
    const comments = within(bookInfo).getByRole('button');
    expect(comments).toHaveTextContent('Comments');
  });

  it('should have action button for deleting a book', () => {
    const removeButton = document.querySelector('.remove');
    expect(removeButton).toHaveAttribute('title', 'Click to remove book from store');
    const action = within(removeButton).getByText('Remove');
    expect(action).toBeInTheDocument();
  });

  it('should have default value Zero for book progress', () => {
    const completed = document.querySelector('.percent');
    expect(completed).toHaveTextContent('0%');
    const currentChapter = document.querySelector('.current-lesson');
    expect(currentChapter).toHaveTextContent('Chapter 0');
  });

  it('should link to route for editing a book', () => {
    const editLink = document.querySelector('.edit');
    const action = within(editLink).getByText('Edit');
    expect(action).toBeInTheDocument();
    expect(action).toHaveAttribute('href', '/edit');
    const updateProgress = document.querySelector('.update-progress');
    const similarAction = within(updateProgress).getByText('Update Progress');
    expect(similarAction).toBeInTheDocument();
    expect(similarAction).toHaveAttribute('href', '/edit');
  });
});
