/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { IoCloudUploadSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORIES } from '../constants';
import { editBookRequested } from '../actions';
import { getPendingUpdate, updateCompleted } from '../selectors';
import Spinner from '../components/Spinner';

export default function BookEditor() {
  const { isLoading } = useSelector((state) => state.notifications);
  const status = useSelector((state) => updateCompleted(state));
  const dispatch = useDispatch();
  const book = useSelector((state) => getPendingUpdate(state));

  const [state, setState] = useState({
    title: book.title,
    category: book.category,
    author: book.author,
    chapter: book.chapter,
    percentage: book.percentage,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const resetForm = () => setState({ title: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = book;
    dispatch(editBookRequested({ id, ...state }));
    resetForm();
  };

  return (
    <div className="editor">
      {
        status ? (
          <a href="/" className="btn btn-outline-secondary w-auto">Back to Homepage</a>
        ) : (
          <form className="row g-2 shadow" onSubmit={handleSubmit}>
            <h3 className="text-center">
              Update in Bookstore
              <Spinner loading={isLoading} />
            </h3>
            <div className="col-md-12 mb-3">
              <label htmlFor="author">Book Title *</label>
              <input
                type="text"
                className="form-control"
                name="title"
                minLength="5"
                value={state.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="author">Category *</label>
              <select
                className="form-select"
                name="category"
                value={state.category}
                onChange={handleChange}
                required
              >
                {
                CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))
              }
              </select>
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                minLength="2"
                value={state.author || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-6 mb-3">
              <label htmlFor="chapter">Current Chapter</label>
              <input
                type="number"
                min="0"
                className="form-control"
                name="chapter"
                value={state.chapter || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-sm-6 mb-3">
              <label htmlFor="percentage">(%) Read</label>
              <input
                type="number"
                min="0"
                max="100"
                className="form-control"
                name="percentage"
                value={state.percentage || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary w-100 mb-3">
                <span className="me-2">Save Details</span>
                <IoCloudUploadSharp />
              </button>
              <a href="/" className="btn btn-outline-secondary w-100">Back to Homepage</a>
            </div>
          </form>
        )
      }
    </div>
  );
}
