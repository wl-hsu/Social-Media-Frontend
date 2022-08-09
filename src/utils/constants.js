import homeSvg from '@assets/home.svg';
import messageSvg from '@assets/message.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';
import { matchPath } from 'react-router-dom';
import style from '../common.module.scss';

export const menus = [
  {
    key: 'tweet',
    title: 'Tweet',
    hideHeader: true,
    link: '/tweet/:id',
  },
  {
    key: 'tweets',
    title: 'Home',
    link: '/',
    isMenu: true,
    icon: <img className={style.icon} src={homeSvg} alt="" />,
  },
  {
    key: 'search',
    link: '/search',
    isMenu: true,
    icon: <img className={style.icon} src={searchSvg} alt="" />,
  },
  {
    key: 'tip',
    title: 'Notifictions',
    link: '/tip',
    isMenu: true,
    icon: <img className={style.icon} src={tipSvg} alt="" />,
  },
  {
    key: 'message',
    title: 'Message',
    link: '/message',
    isMenu: true,
    // eslint-disable-next-line no-undef
    icon: <img className={style.icon} src={messageSvg} alt="" />,
  },
  {
    key: 'comment',
    link: '/comment/:id',
    hideHeader: true,
  },
  {
    key: 'createTweet',
    link: '/createTweet',
    hideHeader: true,
  },
  {
    key: 'my',
    link: '/my',
    hideHeader: true,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

// matchPath('/comment/:id', '/comment/1') => true
export const getMenuByLink = (link) => menus.find((item) => matchPath(item.link, link));

export const includeMenu = (link) => menus.some((item) => item.link === link);
