import { useLocation, useNavigate } from 'react-router-dom';
import { getMenuByKey, getMenuByLink } from './constants';

// get current menu
export const useCurMenu = () => {
  const lo = useLocation();
  const it = getMenuByLink(lo.pathname);
  return it;
};

// redirect
export const useGoTo = () => {
  const navigate = useNavigate();

  return (key) => {
    const it = getMenuByKey(key);
    if (!it) return navigate('/');
    return navigate(it.link);
  };
};
