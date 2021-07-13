import PropTypes from 'prop-types';
import { CATEGORIES } from '../constants';

export default function CategoryFilter({ filterCategory }) {
  const categories = [...['All'], ...CATEGORIES];

  const handleFilterChange = (e) => {
    const { value } = e.target;
    filterCategory(value);
  };

  return (
    <select
      className="form-select my-3 w-auto"
      onChange={handleFilterChange}
    >
      {
        categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))
      }
    </select>
  );
}

CategoryFilter.propTypes = {
  filterCategory: PropTypes.func.isRequired,
};
