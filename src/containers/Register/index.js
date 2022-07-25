import { useEffect, useState } from 'react';
import { Toast } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '@utils/context';
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
  const [, setStore] = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (step === STEP.FIRST) {
      setStore({
        closeHeaderHandler: () => navigate('/login'),
      });
    }
    if (step === STEP.SECOND) {
      setStore({
        closeHeaderHandler: () => setStep(STEP.FIRST),
      });
    }
  }, [step]);
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
      <Show visible={step === STEP.SECOND} isMount>
        <SecondStep
          userInfo={userInfo}
          goToOneStepHandler={() => setStep(STEP.FIRST)}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;
