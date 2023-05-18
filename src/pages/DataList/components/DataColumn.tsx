import type { ColumnConfig } from '@ant-design/plots';
import { Column } from '@ant-design/plots';
import CartWrap from './CartWrap';
import { CartWrapProps } from './CartWrap';

const data = [
  {
    date: '2023-05-22',
    typeName: 'Chargeback Order Num',
    orderNum: 55,
  },
  {
    date: '2023-05-23',
    typeName: 'Chargeback Order Num',
    orderNum: 11,
  },
  {
    date: '2023-05-24',
    typeName: 'Chargeback Order Num',
    orderNum: 4,
  },
  {
    date: '2023-05-25',
    typeName: 'Chargeback Order Num',
    orderNum: 22,
  },
  {
    date: '2023-05-26',
    typeName: 'Chargeback Order Num',
    orderNum: 38,
  },
  {
    date: '2023-05-27',
    typeName: 'Chargeback Order Num',
    orderNum: 66,
  },
];

const DataColumn: React.FC<CartWrapProps> = ({ title }) => {
  const config: ColumnConfig = {
    data,
    padding: 'auto',
    xField: 'date',
    yField: 'orderNum',
    seriesField: 'typeName',
    meta: {
      type: {
        alias: '类别',
      },
      orderNum: {
        alias: 'Chargeback Order Num',
      },
    },
    legend: {
      visible: true,
      position: 'bottom',
    },
  };
  return (
    <CartWrap title={title}>
      <Column {...config} />
    </CartWrap>
  );
};

export default DataColumn;
