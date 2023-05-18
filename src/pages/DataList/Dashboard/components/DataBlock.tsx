import { SyncOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React, { useState, useMemo } from 'react';

type DataBlockProps = {
  title?: string;
  color?: string;
  numb?: number;
  amount?: number;
};

const DataBlock: React.FC<DataBlockProps> = ({ title, numb, color = '#1890ff', amount }) => {
  const [loading, setLoading] = useState(false);

  const refresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const content = useMemo(() => {
    if(loading){
      return (
        <div className=' flex-1 bg-slate-300 bg-opacity-60 flex items-center justify-center'>
          <Spin />
        </div>
      )
    }else{
      return (
        <div className=" flex justify-between items-center text-white">
          <div className=" text-4xl ">{numb}</div>
          <div className=" text-base">金额$：{amount}</div>
        </div>
      );
    }
  },[loading]);


  return (
    <div
      className=" w-full h-full rounded-md drop-shadow-md relative p-4 flex flex-col justify-between"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between items-center">
        <div className=" text-white text-base">{title}</div>
        <SyncOutlined className=" cursor-pointer text-neutral-600" onClick={refresh} />
      </div>
      {content}
    </div>
  );
};

export default DataBlock;
