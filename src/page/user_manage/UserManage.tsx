import { Button, Form, Input, Table } from 'antd';
import { useCallback } from 'react';
import './UserManage.css';
import { SearchUser } from '@/types/user_manage';
import { columns } from './columns';

const data = [
  {
    key: '1',
    username: 'xx',
    headPic: 'xxx.png',
    nickName: 'xxx',
    email: 'xx@xx.com',
    createTime: new Date(),
  },
];

export function UserManage() {
  const searchUser = useCallback(async (values: SearchUser) => {
    console.log(values);
  }, []);

  return (
    <div id="userManage-container">
      <div className="userManage-form">
        <Form onFinish={searchUser} name="search" layout="inline" colon={false}>
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="昵称" name="nickName">
            <Input />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ type: 'email', message: '请输入合法邮箱地址!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              搜索用户
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="userManage-table">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    </div>
  );
}
