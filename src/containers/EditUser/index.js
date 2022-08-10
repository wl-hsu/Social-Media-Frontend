import { useState, useEffect } from 'react';
import Header from '@components/Header';
import { useAppContext } from '@utils/context';

import TInput from '@components/TInput';
import TButton from '@components/TButton';
import style from './index.module.scss';

/**
*
*/
const EditUser = () => {
  const [data, setDate] = useState();
  const [store] = useAppContext();
  useEffect(() => {
    console.log('data', data);
    setDate([]);
  }, []);
  return (
    <div className={style.container}>
      <Header>
        <TButton>Save</TButton>
      </Header>
      <div className={style.header} />
      <img className={style.avatar} src={store.user?.avatar_url} alt="" />
      <div className={style.content}>
        <TInput label="Name" />
      </div>
    </div>
  );
};

export default EditUser;
