import { UserSearchResult } from '@/types/user_manage';
import { ColumnsType } from 'antd/es/table';
import { Badge, Image, message } from 'antd';
import { freeze } from '@/api/user_manage';
import { useCallback, useMemo } from 'react';

// TODO: 这部分怎么放到业务代码里去 ？ 跟columns区分开
// ps. 操作完成后还没刷新 list
// async function freezeUser(id: number) {
//   try {
//     await freeze(id);
//     message.success('冻结成功');
//   } catch (error) {}
// }

// useCallback 包裹，避免多次创建 ?
const freezeUser = useCallback(async (id: number) => {
  try {
    await freeze(id);
    message.success('冻结成功');
  } catch (error) {}
}, []);

// 把 columns 移到组件内，用 useMemo 包裹，这样只会创建一次
export const columns: ColumnsType<UserSearchResult> = useMemo(
  () => [
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
      title: '状态',
      dataIndex: 'isFrozen',
      render: (_, record) =>
        record.isFrozen ? <Badge status="success" text="已冻结" /> : '',
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      render: (_, record) =>
        record.isFrozen ? (
          ''
        ) : (
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
  ],
  [],
);
