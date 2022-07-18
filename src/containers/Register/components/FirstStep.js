import { useState } from 'react';
import { Form } from 'antd-mobile';
import PropTypes from 'prop-types';
import DatePickerInput from '@components/DatePickerInput';
import TInput from '@components/TInput';
import Footer from './Footer';

import style from '../index.module.scss';

const ACCOUNT_TYPE = {
  PHONE: 0,
  EMAIl: 1,
};

/**
 * register page
 */
const FirstStep = ({
  gotoNextStepHandler,
}) => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    phone: '',
    email: '',
    birthday: '20220203',
  });
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.PHONE);
  const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.PHONE) {
      setAccountType(ACCOUNT_TYPE.EMAIl);
      return;
    }
    setAccountType(ACCOUNT_TYPE.PHONE);
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      gotoNextStepHandler(validate);
    }
  };

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
        return;
      }
    } catch (e) {
      if (e.errorFields.length === 0) {
        setFooterButtonDisabled(false);
        return;
      }
      setFooterButtonDisabled(true);
    }
  };

  return (
    <div>
      <div className={style.form}>
        <div className={style.formTitle}>Create your account</div>
        <Form
          form={form}
          initialValues={formData}
          onValuesChange={onValuesChange}
          className={style.formContainer}
        >
          <Form.Item name="username" rules={[{ required: true, message: 'Name is required' }]}>
            <TInput length={50} label="Name" />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.PHONE && (
          <Form.Item name="phone" rules={[{ required: true, message: 'Need a vlidated phone number', pattern: /^(1?|(1-)?)\d{10,12}$/g }]}>
            <TInput length={11} label="Phone" />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIl && (
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Need a validated email address', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g }]}
          >
            <TInput label="Email" />
          </Form.Item>
          )}
          <span className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === ACCOUNT_TYPE.EMAIl ? 'use phone instead' : 'use email instead'}
          </span>
          <div className={style.birthdayTitle}>Date of birth</div>
          <div className={style.privatePolicyAnnouncment}>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <Footer label="Next" disabled={footerButtonDisabled} onClickNextStep={onClickNextStep} />
    </div>
  );
};

FirstStep.propTypes = {
  gotoNextStepHandler: PropTypes.func.isRequired,
};

export default FirstStep;
