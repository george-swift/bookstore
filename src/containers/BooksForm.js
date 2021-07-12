/* eslint-disable jsx-a11y/label-has-associated-control */
import { CATEGORIES } from '../constants';

export default function BooksForm() {
  return (
    <form className="container row g-2 bookform">
      <div className="col-lg-6 form-floating">
        <input type="text" className="form-control" placeholder="Book title" />
        <label>Book Title</label>
      </div>
      <div className="col-lg-4 form-floating">
        <select className="form-select">
          <option defaultValue="Select a category">Select a category</option>
          {
            CATEGORIES.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <label>Category</label>
      </div>
      <button type="submit" className="btn btn-primary col-lg-2 fw-bold">ADD BOOK</button>
    </form>
  );
}
