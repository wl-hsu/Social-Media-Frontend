import { useState } from 'react';
import { Toast } from 'antd-mobile';
// import Header from '@components/Header';
import { registerUser } from '@services/register';
import Show from '@components/Show';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';

// Step count
const STEP = {
  FIRST: 1,
  SECOND: 2,
};
/**
 * Register page
 */
const Register = () => {
  const [step, setStep] = useState(STEP.FIRST);
  const [userInfo, setUserInfo] = useState({});

  const gotoNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.SECOND);
  };

  const confirmRegisterHandler = async (password) => {
    const res = await registerUser({
      password,
      ...userInfo,
    });
    if (res.success) {
      Toast.show('Signup success');
      return;
    }
    Toast.show('Signup failure');
  };

  // const onClickClose = () => {
  //   setStep(STEP.FIRST);
  // };

  return (
    <div>
      <Show visible={step === STEP.FIRST}>
        <FirstStep gotoNextStepHandler={gotoNextStepHandler} />
      </Show>
      <Show visible={step === STEP.SECOND}>
        <SecondStep
          userInfo={userInfo}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;
