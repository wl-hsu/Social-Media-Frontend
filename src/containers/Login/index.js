import Header from '@components/Header';
import TInput from '@components/TInput';
import {
  Button, Form, Dialog,
} from 'antd-mobile';
import { login } from '../../services/login';
import style from './index.module.scss';

/**
 * Login page
 */
const Login = () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const res = await login(values.username, values.password);
      console.log('>>', res);
      if (res.success && res.data.length > 0) {
        Dialog.alert({
          content: 'Login success',
        });
        return;
      }
      Dialog.alert({
        content: 'Login failure',
      });
    }
  };

  return (
    <>
      <Header />
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
          <a
            href="/"
            target="_blank"
          >
            Sign up
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
