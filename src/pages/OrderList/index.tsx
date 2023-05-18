import { BulbOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { useState } from 'react';

import OrderBlock from './components/OrderBlock';
import OrderTableList from './components/OrderTableList';

type orderTyp = 'all' | 'protest' | 'service';

const OrderList = () => {
  const [type, setType] = useState<orderTyp>('all');

  const changeType = ({ target: { value } }: RadioChangeEvent) => {
    setType(() => {
      return value;
    });
  };

  return (
    <>
      <Radio.Group value={type} onChange={changeType}>
        <Radio.Button value="all">
          <FormattedMessage id="order.type.all" defaultMessage="全部" />
        </Radio.Button>
        <Radio.Button value="protest">
          <FormattedMessage id="order.type.protest" defaultMessage="拒付" />
        </Radio.Button>
        <Radio.Button value="service">
          <FormattedMessage id="order.type.compensation-service" defaultMessage="包赔服务" />
        </Radio.Button>
      </Radio.Group>

      {/* 全部 */}
      {type === 'all' && (
        <>
          <div className=" grid grid-cols-4 gap-4 pb-5">
            <OrderBlock title="全部" icon={<BulbOutlined style={{ color: '#f40' }} />}>
              <div className=" ">
                <span className=" text-3xl font-bold">0</span>{' '}
                <span className=" text-gray-500"> / 0%</span>
              </div>
              <div className=" text-gray-500">$0 / 0%</div>
            </OrderBlock>
            <OrderBlock title="拒绝" icon={<BulbOutlined style={{ color: '#f40' }} />}>
              <div className=" ">
                <span className=" text-3xl font-bold">0</span>{' '}
                <span className=" text-gray-500"> / 0%</span>
              </div>
              <div className=" text-gray-500">$0 / 0%</div>
            </OrderBlock>
            <OrderBlock title="审核" icon={<BulbOutlined style={{ color: '#f40' }} />}>
              <div className=" ">
                <span className=" text-3xl font-bold">0</span>{' '}
                <span className=" text-gray-500"> / 0%</span>
              </div>
              <div className=" text-gray-500">$0 / 0%</div>
            </OrderBlock>
            <OrderBlock title="通过" icon={<BulbOutlined style={{ color: '#f40' }} />}>
              <div className=" ">
                <span className=" text-3xl font-bold">0</span>{' '}
                <span className=" text-gray-500"> / 0%</span>
              </div>
              <div className=" text-gray-500">$0 / 0%</div>
            </OrderBlock>
          </div>
          <div>
            <OrderTableList />
          </div>
        </>
      )}
      {/* 拒付 */}
      {type === 'protest' && (
        <>
          <div className=" grid grid-cols-2 gap-4 pb-5">
            <OrderBlock title="全部" icon={<BulbOutlined style={{ color: '#f40' }} />}>
              <div className=" ">
                <span className=" text-3xl font-bold">0</span>{' '}
                <span className=" text-gray-500"> / 0%</span>
              </div>
              <div className=" text-gray-500">$0 / 0%</div>
            </OrderBlock>
            <OrderBlock title="欺诈拒付订单" icon={<BulbOutlined style={{ color: '#f40' }} />}>
              <div className=" ">
                <span className=" text-3xl font-bold">0</span>{' '}
                <span className=" text-gray-500"> / 0%</span>
              </div>
              <div className=" text-gray-500">$0 / 0%</div>
            </OrderBlock>
          </div>
          <div>
            <OrderTableList />
          </div>
        </>
      )}
      {/* 包赔服务 */}
      {type === 'service' && (
        <div className=' w-full bg-white rounded-sm px-4 py-6 mt-5'>
          <div className='flex items-center'>
            <span className=' text-sm text-slate-900 font-semibold'>包赔服务</span>
            <span className='block before:content-[""] before:top-2.5 before:left-2.5 before:absolute before:rounded-full before:w-1.5 before:h-1.5 before:bg-yellow-500  relative rounded-full bg-yellow-100 text-yellow-500 text-xs p-1 px-3 pl-5 ml-2'>申请开通</span>
          </div>

          <div className=' text-xs mt-3'>
            <div className='leading-8'>包赔服务是对拒付订单进行赔付的额外保障服务。</div>
            <div className='leading-8'>如果开通此服务，即可对满足包赔条件的拒付订单申请赔付。</div>
            <div className='leading-8'>如您对我们的包赔服务感兴趣，请点击“申请开通”，会有运营同学联系您。</div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderList;
