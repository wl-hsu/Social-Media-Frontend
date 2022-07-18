import { useState } from 'react';
import { Button, Form } from 'antd-mobile';
import DatePickerInput from '@components/DatePickerInput';
import Header from '@components/Header';
import TInput from '@components/TInput';

import style from './index.module.scss';

const ACCOUNT_TYPE = {
  Phone: 0,
  Email: 1,
};

/**
 * register page
 */
const Register = () => {
  const [form] = Form.useForm();
  const [formData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    birthday: '20220203',
  });
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.Phone);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.Phone) {
      setAccountType(ACCOUNT_TYPE.EMAIl);
      return;
    }
    setAccountType(ACCOUNT_TYPE.Phone);
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      console.log(validate);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form form={form} initialValues={formData} className={style.formContainer}>
          <Form.Item name="Name" rules={[{ required: true, message: 'Name is required' }]}>
            <TInput length={50} label="Name" />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.Phone && (
          <Form.Item name="Phone" rules={[{ required: true, message: 'Phone is required' }]}>
            <TInput length={10} label="Phone" />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIl && (
          <Form.Item name="Email" rules={[{ required: true, message: 'Email is required' }]}>
            <TInput label="Email" />
          </Form.Item>
          )}
          <div className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === ACCOUNT_TYPE.EMAIl ? 'Use phone instead' : 'Use email instead'}
          </div>
          <div className={style.birthdayTitle}>Date of birth</div>
          <div className={style.privatePolicyAnnouncment}>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton} onClick={onClickNextStep}>下一步</Button>
      </div>
    </div>
  );
};

export default Register;
