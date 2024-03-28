import { Button, Form, Input, Table } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './UserManage.css';
import {
  SearchUser,
  SearchUserWithPage,
  UserSearchResult,
} from '@/types/user_manage';
import { columns } from './columns';
import { getUserList } from '@/api/user_manage';
import { useForm } from 'antd/es/form/Form';

export function UserManage() {
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [tableData, setTableData] = useState<UserSearchResult[]>([]);
  const [total, setTotal] = useState<number>(0);

  // 查询条件
  const searchUser = (values: SearchUser) => {
    const params = {
      pageNo,
      pageSize: 10,
      ...values,
    };
    getTableData(params);
  };

  // 刷新table
  const getTableData = async (params: SearchUserWithPage) => {
    try {
      const { data } = await getUserList(params);
      setTableData(data.users);
      setTotal(data.totalCount);
    } catch (error) {}
  };

  // 分页
  // const changePage = (num) => {
  //   setPageSize(num);
  // };

  const [form] = useForm();
  useEffect(() => {
    searchUser({
      username: form.getFieldValue('username'),
      email: form.getFieldValue('email'),
      nickName: form.getFieldValue('nickName'),
    });
  }, [pageNo]);

  // 不用 useCallback, antd里面会报错  为什么 ？
  const changePage = useCallback((pageNo: number) => {
    setPageNo(pageNo);
  }, []);

  const curCols = useMemo(() => columns, []);

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
          columns={curCols}
          rowKey="id"
          dataSource={tableData}
          pagination={{
            current: pageNo,
            pageSize: pageSize,
            total: total,
            onChange: changePage,
          }}
        />
      </div>
    </div>
  );
}
