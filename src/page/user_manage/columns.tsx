import { UserSearchResult } from '@/types/user_manage';
import { ColumnsType } from 'antd/es/table';
import { Image, message } from 'antd';
import { freeze } from '@/api/user_manage';

// TODO: 这部分怎么放到业务代码里去 ？ 跟colunns区分开
// ps. 操作完成后还没刷新 list
async function freezeUser(id: number) {
  try {
    await freeze(id);
    message.success('冻结成功');
  } catch (error) {}
}

export const columns: ColumnsType<UserSearchResult> = [
  {
    title: 'id',
    dataIndex: 'id',
  },
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
  {
    title: '操作',
    render: (_, record) => (
      <a
        href="#"
        onClick={() => {
          freezeUser(record.id);
        }}
      >
        冻结
      </a>
    ),
  },
];
