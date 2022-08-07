import Bottom from '@components/Bottom';
import Header from '@components/Header';
import { getUser } from '@services/login';
import { useAppContext } from '@utils/context';
import { useCurMenu } from '@utils/hooks';
import { Toast } from 'antd-mobile';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import style from './index.module.scss';

const App = () => {
  const [, setStore] = useAppContext();
  const nav = useNavigate();
  const location = useLocation();
  const menu = useCurMenu();
  useEffect(() => {
    const init = async () => {
      const userId = Cookies.get('userId');
      if (!userId) {
        Toast.show('please re-login...');
        nav('/login');
        return;
      }
      const res = await getUser(userId);
      if (res.data) {
        setStore({
          user: res.data,
        });
        if (location.pathname === '/login') {
          nav('/tweets');
        }
        return;
      }
      nav('/login');
    };
    init();
  }, []);

  return (
    <div className={style.container}>
      {!menu.hideHeader && <Header />}
      <Outlet />
      <Bottom />
    </div>
  );
};

export default App;
