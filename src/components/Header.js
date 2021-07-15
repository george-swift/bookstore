import { IoIosPerson } from 'react-icons/all';

const Header = () => (
  <header className="container-fluid header">
    <h1>
      <a href="/">Bookstore CMS</a>
    </h1>
    <ul>
      <li>
        <div className="cms">
          <span className="books" role="button">Books</span>
          <span className="categories" role="button">Categories</span>
        </div>
      </li>
      <li>
        <span className="user" role="button">
          <IoIosPerson className="user-svg" />
        </span>
      </li>
    </ul>
  </header>
);

export default Header;
