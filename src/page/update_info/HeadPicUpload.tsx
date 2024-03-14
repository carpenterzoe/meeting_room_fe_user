import { message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Dragger, { DraggerProps } from 'antd/es/upload/Dragger';

interface HeadPicUploadProps {
  value?: string;
  onChange?: (url: string) => void; // ? 子组件的onChange 是这个类型吗
}

let onChangeCb: (url: string) => void;

const props: DraggerProps = {
  name: 'file',
  action: 'http://localhost:3005/user/upload',
  onChange(info) {
    const { status } = info.file;
    if (status === 'done') {
      // Form.Item 的 cb, 用于更换图片后更新回显
      onChangeCb(info.file.response.data as string);
      message.success(`${info.file.name} 文件上传成功`);
    } else if (status === 'error') {
      const { message: msg } = info.file.response;
      message.error(msg);
    }
  },
};

const dragger = (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击或拖拽文件到这个区域来上传</p>
  </Dragger>
);

export function HeadPicUpload(props: HeadPicUploadProps) {
  onChangeCb = props.onChange!; // 为啥要赋值呢，传进来直接调用岂不是更好？
  return props?.value ? (
    <div>
      <img
        src={'http://localhost:3005/' + props.value}
        alt="头像"
        width="100"
        height="100"
      />
      {dragger}
    </div>
  ) : (
    <div>{dragger}</div>
  );
}
