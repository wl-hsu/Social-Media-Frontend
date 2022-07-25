import { Input } from 'antd-mobile';
import PropTypes from 'prop-types';
import { useState } from 'react';
import style from '../index.module.scss';
import Footer from './Footer';

/**
 * second step: add password
 */
const SecondStep = ({
  confirmRegisterHandler,
  userInfo,
}) => {
  const [password, setPassword] = useState();
  const [disabled, setDisabled] = useState(true);
  const onConfirmRegister = () => {
    confirmRegisterHandler(password);
  };

  const onChangePwd = (val) => {
    setPassword(val);
  };

  const onChangeConfirmPwd = (val) => {
    if (val === password) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  return (
    <div className={style.SecondStep}>
      <div className={style.form}>
        <div className={style.formTitle}>Set your password</div>
        <div className={style.showLabelContainer}>
          <div className={style.showLabel}>
            Name:
            <span>{userInfo.username}</span>
          </div>
          {userInfo.email && (
          <div className={style.showLabel}>
            Email:
            <span>{userInfo.email}</span>
          </div>
          )}
          {userInfo.phone && (
          <div className={style.showLabel}>
            Phone:
            <span>{userInfo.phone}</span>
          </div>
          )}
          <div className={style.showLabel}>
            Date of birth:
            <span>{userInfo.birthday}</span>
          </div>
        </div>
        <div className={style.label}>Password</div>
        <Input className={style.input} onChange={onChangePwd} />
        <div className={style.label}>Password verification</div>
        <Input className={style.input} type="password" onChange={onChangeConfirmPwd} />
        {disabled && <div className={style.showTip}>password need to be matched</div>}
      </div>
      <Footer disabled={disabled} label="Sign up" onClickNextStep={onConfirmRegister} />
    </div>
  );
};

SecondStep.propTypes = {
  confirmRegisterHandler: PropTypes.func.isRequired,
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    birthday: PropTypes.string,
  }).isRequired,
};

export default SecondStep;
