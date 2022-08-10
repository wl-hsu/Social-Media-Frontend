import { useEffect } from 'react';
import {
  Button, Form, Dialog,
} from 'antd-mobile';
import { Link } from 'react-router-dom';
import cookies from 'js-cookie';
import { useAppContext } from '@utils/context';
import TInput from '@components/TInput';
import { login } from '../../services/login';
import style from './index.module.scss';

/**
 * Login page
 */
const Login = () => {
  const [form] = Form.useForm();

  const [, setStore] = useAppContext();
  useEffect(() => {
    setStore({
      closeHeaderHandler: null,
    });
  }, []);

  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const res = await login(values.username, values.password);
      if (res.success && res.data.length > 0) {
        Dialog.alert({
          content: 'Login successfully',
        });
        cookies.set('userId', res.data[0].id);
        return;
      }
      Dialog.alert({
        content: 'Login unsuccessfully',
      });
    }
  };

  return (
    <div className={style.login}>
      <div className={style.formTitle}>Login twitter</div>
      <Form
        form={form}
        className={style.formContainer}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: 'Username is required' },
          ]}
        >
          <TInput label="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Password is required' },
          ]}
        >
          <TInput label="Password" type="password" />
        </Form.Item>
        <Button className={style.footerButton} onClick={onSubmit}>
          Next
        </Button>
      </Form>
      <div className={style.goToRegister}>
        New to twitter?
        <Link
          to="/register"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
