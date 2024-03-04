import { Button, Form, Input, message } from 'antd';
import { login } from '@/api';
import './login.css';
import { LoginUserReq } from '@/types/user';

const onFinish = async (values: LoginUserReq) => {
  try {
    const { data } = await login(values.username, values.password);
    // console.log('data: ', data.refreshToken); // todo: 类型报错了，应该是拦截器里面改了结构，但是这里读的还是原始定义的返回
    message.success('登录成功');
    // localStorage.setItem('access_token', data);
    // localStorage.setItem('refresh_token', data.refreshToken);
    // localStorage.setItem('user_info', JSON.stringify(data.userInfo));
  } catch (error) {}
};

const layout1 = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const layout2 = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

export function Login() {
  return (
    <div id="login-container">
      <h1>会议室预订系统</h1>
      <Form {...layout1} onFinish={onFinish} colon={false} autoComplete="off">
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...layout2}>
          <div className="links">
            <a href="">创建账号</a>
            <a href="">忘记密码</a>
          </div>
        </Form.Item>

        <Form.Item {...layout2}>
          <Button className="btn" type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
