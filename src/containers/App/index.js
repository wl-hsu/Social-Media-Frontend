import Bottom from '@components/Bottom';
import Header from '@components/Header';
import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <Header />
    <Outlet />
    <Bottom />
  </>
);

export default App;
