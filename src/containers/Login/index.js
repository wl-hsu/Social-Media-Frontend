import {
  Button, Input, Form, Dialog,
} from 'antd-mobile';
import './index.css';
import { loginService } from '../../services/login';

const initialValues = {
  username: 'test1',
  password: '123456',
};

const Login = () => {
  const [form] = Form.useForm();
  const onSbubmit = async () => {
    const values = form.getFieldsValue();
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: 'Login suceesfully',
      });
      return;
    }
    Dialog.alert({
      content: 'Login failed',
    });
  };
  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        mode="card"
        initialValues={initialValues}
        footer={(
          <Button color="primary" onClick={onSbubmit} size="large">
            Login
          </Button>
          )}
      >
        <Form.Item label="username" name="username">
          <Input placeholder="username" clearable type="username" />
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input placeholder="password" clearable type="password" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
