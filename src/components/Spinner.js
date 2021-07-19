import { FaSpinner } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Spinner = ({ loading }) => (
  loading && (
    <span>
      <FaSpinner className="loading" />
    </span>
  )
);

Spinner.propTypes = PropTypes.bool.isRequired;

export default Spinner;
