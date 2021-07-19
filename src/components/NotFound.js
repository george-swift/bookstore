import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container">
      <div className="text-center">
        <h3>Page not Found!</h3>
        <p>
          <Link to="/"> Back to Homepage</Link>
        </p>
      </div>
    </div>
  );
}
