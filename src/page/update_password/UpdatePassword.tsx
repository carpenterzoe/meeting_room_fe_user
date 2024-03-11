import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import './update_password.css';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdatePasswordType } from '@/types/user';
import { updatePasswordApi, updatePasswordCaptcha } from '@/api/password';

const layout1 = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export function UpdatePassword() {
  const [form] = useForm();
  const navigate = useNavigate();

  const onFinish = useCallback(async (values: UpdatePasswordType) => {
    if (values.password !== values.confirmPassword) {
      return message.error('两次密码不一致');
    }
    try {
      await updatePasswordApi(values);
      message.success('密码修改成功');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (error) {}
  }, []);

  const sendCaptcha = useCallback(async function () {
    const address = form.getFieldValue('email');
    if (!address) {
      return message.error('请输入邮箱地址');
    }

    try {
      const { data } = await updatePasswordCaptcha(address);
      message.success(data);
    } catch (error) {}
  }, []);

  return (
    <div id="updatePassword-container">
      <h1>会议室预订系统</h1>
      <Form
        form={form}
        {...layout1}
        onFinish={onFinish}
        colon={false}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: '请输入邮箱!' },
            { type: 'email', message: '请输入合法邮箱地址!' },
          ]}
        >
          <Input />
        </Form.Item>

        <div className="captcha-wrapper">
          <Form.Item
            label="验证码"
            name="captcha"
            rules={[{ required: true, message: '请输入验证码!' }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" onClick={sendCaptcha}>
            发送验证码
          </Button>
        </div>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirmPassword"
          rules={[{ required: true, message: '请输入确认密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...layout1} label=" ">
          <Button className="btn" type="primary" htmlType="submit">
            修改
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}