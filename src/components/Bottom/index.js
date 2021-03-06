import { TabBar } from 'antd-mobile';
import { useEffect } from 'react';
import { useAppContext } from '@utils/context';
import { useCurMenu, useGoTo } from '@utils/hooks';
import { getMenuByKey, menus } from '@utils/constants';

import style from './index.module.scss';

/**
* bottom bar
*/
const Bottom = () => {
  const [, setStore] = useAppContext();
  const go = useGoTo();
  const menu = useCurMenu();

  useEffect(() => {
    if (menu) {
      setStore({
        title: menu.title,
      });
    }
  }, []);

  const onChangeTabItem = (key) => {
    const mu = getMenuByKey(key);
    setStore({
      title: mu.title,
    });
    go(key);
  };

  return (
    <div className={style.container}>
      <TabBar onChange={onChangeTabItem}>
        {menus.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
