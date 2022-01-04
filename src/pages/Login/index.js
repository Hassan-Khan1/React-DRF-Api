import React, { useContext } from 'react';
import { Form, Input, Button, PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';

// contexts
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const history = useHistory();
  const { data, setData } = useContext(UserContext);

  const onSubmit = (values) => {
    setData(values);
    history.push('/');
  };
  
  return (
    <div className='Login'>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
      <Form onFinish={onSubmit}>
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
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
