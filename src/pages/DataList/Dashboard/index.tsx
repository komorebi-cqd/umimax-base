import { useState } from 'react';
import DataPie from '../components/DataPie';
import MultipleLine from '../components/MultipleLine';
import TestDome from '../components/TestDome';
import DataBlock from './components/DataBlock';
import DefaultHead from '../components/DefaultHead';

const Dashboard = () => {
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
      <DefaultHead />
      <div className=" grid grid-cols-4 gap-4 mb-5 h-36">
        {[1, 2, 3, 4].map((i) => (
          <DataBlock key={i} amount={i} numb={i} title="全部 | All" />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className=" bg-white rounded-md h-80 ">
            <DataPie
              data={data}
              onReady={(plot: any) => {
                plot.on('element:click', () => {
                  console.log(666);
                });
              }}
            />
        </div>
        <div className=" bg-white rounded-md h-80 pb-6">
            <TestDome />
        </div>
        <div className=" bg-white rounded-md h-80">
            <MultipleLine />
        </div>
        <div className=" bg-white rounded-md h-80 pb-6">
            <TestDome />
        </div>

        <div className=" rounded-md h-80 relative grid grid-cols-2 gap-4">
          <DataBlock amount={0} numb={0} title="全部 | All" />
          <DataBlock amount={0} numb={0} title="全部 | All" />
        </div>

        <div className=" bg-white rounded-md h-80 pb-6">
            <TestDome />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
