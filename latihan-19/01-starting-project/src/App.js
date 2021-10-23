import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import { useSelector } from 'react-redux';

function App() {
  const uiVisible = useSelector(state => state.ui.isVisible);

  return (
    <Layout>
      { uiVisible && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
