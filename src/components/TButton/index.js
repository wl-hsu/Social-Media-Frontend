import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';

import style from './index.module.scss';

/**
* Public BUTTON
*/
const TButton = ({
  onClick,
  children,
}) => <Button className={style.button} onClick={onClick}>{children}</Button>;

TButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default TButton;
