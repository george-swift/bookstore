import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../constants';
import { createBookRequested } from '../actions';

const BooksForm = ({ createBookRequested }) => {
  const [state, setState] = useState({
    title: '',
    category: '',
  });

  const { title, category } = state;

  const handleChange = (e) => {
    const defaultValue = 'Category';
    const { name, value } = e.target;
    if (value === defaultValue) return;
    setState({
      ...state,
      [name]: value,
    });
  };

  const resetForm = () => setState({ title: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category === '') return;
    createBookRequested({
      title,
      category,
    });
    resetForm();
  };

  return (
    <div className="container-fluid wrap-form">
      <h3 className="form-title">Add new book</h3>
      <form className="row bookform" onSubmit={handleSubmit}>
        <div className="col-lg-6">
          <input
            type="text"
            className="custom-width form-control"
            name="title"
            placeholder="Book title"
            onChange={handleChange}
            value={title}
            minLength="5"
            required
          />
        </div>
        <div className="col-lg-4 category-input">
          <select
            className="form-select"
            name="category"
            value={category}
            onChange={handleChange}
            required
          >
            <option>Category</option>
            {
              CATEGORIES.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
        </div>
        <div className="col-lg-2 submit-form">
          <button type="submit" className="btn btn-primary">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBookRequested: PropTypes.func.isRequired,
};

export default connect(null, { createBookRequested })(BooksForm);
export { BooksForm as UnconnectedBooksForm };
