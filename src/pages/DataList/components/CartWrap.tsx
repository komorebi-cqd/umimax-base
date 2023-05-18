import { SyncOutlined } from '@ant-design/icons';
import React from 'react';

export type CartWrapProps = {
  title?: string;
  children?: React.ReactNode;
  refresh?: () => void;
};

const CartWrap: React.FC<CartWrapProps> = ({ title = '表单数据', children, refresh }) => {
  const handleRefresh = () => {
    console.log('刷新');
    if(refresh) refresh();
  };
  return (
    <div className="w-full h-full relative pt-16 px-10 pb-0">
      <div className=" absolute left-0 right-0 top-6 w-full px-10 flex justify-between items-center">
        <div className=" text-neutral-700">{title}</div>
        <SyncOutlined className=" text-neutral-600 cursor-pointer" onClick={handleRefresh} />
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default CartWrap;
