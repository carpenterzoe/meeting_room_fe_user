import React from 'react';
import { Segmented } from 'antd';
import type { SegmentedProps } from 'antd';

interface LoginTypeProps {
  loginType?: string;
  changeLoginType?: (val: string) => void;
}

const options: SegmentedProps['options'] = [
  { value: '1', label: '用户' },
  { value: '2', label: '管理员' },
];

const LoginTabs: React.FC<LoginTypeProps> = (props) => {
  return (
    <Segmented
      defaultValue="1"
      options={options}
      onChange={(key) => props.changeLoginType?.(key as string)}
    />
  );
};

export default LoginTabs;
