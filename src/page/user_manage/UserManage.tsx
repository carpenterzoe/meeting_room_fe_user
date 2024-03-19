import { Button, Form, Input, Table } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import './UserManage.css';
import {
  SearchUser,
  SearchUserWithPage,
  UserSearchResult,
} from '@/types/user_manage';
import { columns } from './columns';
import { getUserList } from '@/api/user_manage';

export function UserManage() {
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [tableData, setTableData] = useState<UserSearchResult[]>([]);

  const initParams = {
    pageNo: 1,
    pageSize: 10,
  };

  // 查询条件
  const searchUser = useCallback(async (values: SearchUser) => {
    const params = {
      ...initParams,
      ...values,
    };
    getTableData(params);
  }, []);

  // 刷新table
  const getTableData = async (params: SearchUserWithPage) => {
    try {
      const { data } = await getUserList(params);
      setTableData(data.users);
    } catch (error) {}
  };

  // 分页
  const changePage = (num: number) => {
    setPageSize(num);
  };

  // 初始数据
  useEffect(() => {
    const init = () => {
      getTableData(initParams);
    };
    init();
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
              查询
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="userManage-table">
        <Table
          columns={columns}
          rowKey="id"
          dataSource={tableData}
          pagination={{
            current: pageNo,
            pageSize: pageSize,
            onChange: changePage,
          }}
        />
      </div>
    </div>
  );
}
