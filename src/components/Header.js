import { IoIosPerson } from 'react-icons/all';

const Header = () => (
  <header className="container-fluid header">
    <h1>
      <a href="/">Bookstore CMS</a>
    </h1>
    <ul>
      <li>
        <div className="cms">
          <span id="books" role="button">Books</span>
          <span id="categories" role="button">Categories</span>
        </div>
      </li>
      <li>
        <span id="user" role="button">
          <IoIosPerson id="user-svg" />
        </span>
      </li>
    </ul>
  </header>
);

export default Header;
