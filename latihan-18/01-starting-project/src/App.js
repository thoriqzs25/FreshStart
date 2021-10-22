import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import Auth from './components/Auth';
import Counter from './components/Counter';


function App() {
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
