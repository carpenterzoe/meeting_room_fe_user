import { UserSearchResult } from '@/types/user_manage';
import { ColumnsType } from 'antd/es/table';

export const columns: ColumnsType<UserSearchResult> = [
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '头像',
    dataIndex: 'headPic',
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '注册时间',
    dataIndex: 'createTime',
  },
];
