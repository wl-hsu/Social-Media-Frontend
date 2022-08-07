import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';

import style from './index.module.scss';

/**
* public BUTTON
*/
const TButton = ({
  onClick,
  children,
  disabled,
}) => <Button disabled={disabled} className={style.button} onClick={onClick}>{children}</Button>;

TButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default TButton;
