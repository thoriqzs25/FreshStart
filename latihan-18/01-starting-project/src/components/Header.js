import classes from './Header.module.css';
import { authActions } from '../store';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault()

    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
