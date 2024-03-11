import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useCallback, useEffect } from 'react';
import './update_info.css';
import { useNavigate } from 'react-router-dom';
import { UpdateUserInfo } from '@/types/user';
import {
  getUserInfo,
  updateUserApi,
  updateUserCaptcha,
} from '@/api/update_user';

const layout1 = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export function UpdateInfo() {
  const [form] = useForm();
  const navigate = useNavigate();

  const onFinish = useCallback(async (values: UpdateUserInfo) => {
    try {
      await updateUserApi(values);
      message.success('修改成功');
    } catch (error) {}
  }, []);

  const sendCaptcha = useCallback(async () => {
    try {
      const { email } = await form.validateFields(['email']);
      const { data } = await updateUserCaptcha(email);
      message.success(data);
    } catch (error) {}
  }, []);

  /**
   * useEffect(effect, dependencies)
   * 在函数组件中调用 useEffect，并传入一个回调函数作为 effect。
   * 这个回调函数将会在组件渲染完成后执行。

   * 可选地，传入一个依赖项数组作为第二个参数。依赖项数组表示什么情况下需要重新运行 effect。
   * 如果不传入依赖项数组，则 effect 每次组件重新渲染时都会执行；
   * 如果传入一个空数组 []，则 effect 只会在组件挂载和卸载时执行；
   * 如果传入依赖项数组，effect 将会在依赖项发生变化时执行。
   */
  useEffect(() => {
    async function query() {
      try {
        const res = await getUserInfo();
        console.log('res: ', res);
      } catch (error) {
        console.log('error: ', error);
      }
    }
    query();
  }, []); // 传入一个空数组 []，则 effect 只会在组件挂载和卸载时执行

  return (
    <div id="updateInfo-container">
      <Form
        form={form}
        {...layout1}
        onFinish={onFinish}
        colon={false}
        autoComplete="off"
      >
        <Form.Item
          label="头像"
          name="headPic"
          rules={[{ required: true, message: '请输入头像!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="昵称"
          name="nickName"
          rules={[{ required: true, message: '请输入昵称!' }]}
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

        <Form.Item {...layout1} label=" ">
          <Button className="btn" type="primary" htmlType="submit">
            修改密码
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
