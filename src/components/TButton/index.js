import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './index.module.scss';

/**
* public BUTTON
*/
const TButton = ({
  className,
  onClick,
  children,
  disabled,
}) => (
  <Button
    disabled={disabled}
    className={classNames(style.button, className)}
    onClick={onClick}
  >
    {children}
  </Button>
);

TButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

TButton.defaultProps = {
  className: '',
  disabled: false,
};

export default TButton;
