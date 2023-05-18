import { useState } from 'react';
import DataPie from '../components/DataPie';
import DefaultHead from '../components/DefaultHead';
import DataTable from '../components/DataTable';

const ReasonAnalysis = () => {
  const [data] = useState([
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ]);
  return (
    <div>
      <DefaultHead title="拒绝原因分析" />
      <div className='bg-white rounded-md h-80'>
        <DataTable title='Reject Reason'/>
      </div>
      <div className=" bg-white rounded-md h-80 mt-4">
        <DataPie
          title="拒绝规则比率"
          data={data}
          onReady={(plot: any) => {
            plot.on('element:click', () => {
              console.log(666);
            });
          }}
        />
      </div>
    </div>
  );
};

export default ReasonAnalysis;
