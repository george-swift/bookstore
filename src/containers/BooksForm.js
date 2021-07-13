import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uniqueID, CATEGORIES } from '../constants';
import { createBook } from '../actions';

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({
    title: '',
    category: '',
  });

  const { title, category } = state;

  const handleChange = (e) => {
    const defaultValue = 'Select a category';
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
    createBook({
      id: uniqueID(),
      title,
      category,
    });
    resetForm();
  };

  return (
    <form className="container row g-2 bookform" onSubmit={handleSubmit}>
      <div className="col-lg-6">
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
          value={title}
          minLength="5"
          required
        />
      </div>
      <div className="col-lg-4">
        <select
          className="form-select"
          name="category"
          value={category}
          onChange={handleChange}
          required
        >
          <option>Select a category</option>
          {
            CATEGORIES.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
      </div>
      <button type="submit" className="btn btn-primary col-lg-2 fw-bold">ADD BOOK</button>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
