import { Form, Input, Button, Checkbox } from 'antd';
import {auth} from '../util/firebase';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

<<<<<<< HEAD
=======
const formStyle = {
    fontSize: '2em',
}

>>>>>>> fb2a8b0c5e732ebb0ab90eff85dad456fec8689c
const SignIn = () => {
  const onFinish = async ({username, password}) => {
    try {
      const result = await auth().signInWithEmailAndPassword(username, password);
      console.log(result);

      const token = await auth().currentUser.getIdToken();
      console.log(token);
      return result;
    } 
    catch (error) {
      console.log(error);
    }
  };
  
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;