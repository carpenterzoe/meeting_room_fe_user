import { UserSearchResult } from '@/types/user_manage';
import { ColumnsType } from 'antd/es/table';
import { Image } from 'antd';

export const columns: ColumnsType<UserSearchResult> = [
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '头像',
    dataIndex: 'headPic',
    render: (text, record, index) =>
      text ? <Image width={50} src={text}></Image> : '',
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
