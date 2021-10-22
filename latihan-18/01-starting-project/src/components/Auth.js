import classes from './Auth.module.css';
import { authActions } from '../store';
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => console.log(state.authentication.isAuthenticated));

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <main className={classes.auth}>
      <section>
        {!isAuthenticated && <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>}
        {isAuthenticated && <form>
          <button onClick={logoutHandler}>Logout</button>
        </form>}
      </section>
    </main>
  );
};

export default Auth;
