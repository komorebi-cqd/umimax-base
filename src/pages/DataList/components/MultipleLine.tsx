import type { LineConfig } from '@ant-design/plots';
import { Line } from '@ant-design/plots';
import CartWrap, { CartWrapProps } from './CartWrap';

const MultipleLine: React.FC<CartWrapProps> = ({ title }) => {
  const config: LineConfig = {
    data: [
      {
        name: 'Accept Rate',
        value: 2222,
        date: '2023-05-11',
      },
      {
        name: 'Accept Rate',
        value: 33333,
        date: '2023-05-12',
      },
      {
        name: 'Accept Rate',
        value: 444444,
        date: '2023-05-13',
      },
      {
        name: 'Accept Rate',
        value: 55555,
        date: '2023-05-14',
      },
      {
        name: 'Reject Ratio',
        value: 2222,
        date: '2023-05-11',
      },
      {
        name: 'Reject Ratio',
        value: 33363,
        date: '2023-05-12',
      },
      {
        name: 'Reject Ratio',
        value: 44454,
        date: '2023-05-13',
      },
      {
        name: 'Reject Ratio',
        value: 55555,
        date: '2023-05-14',
      },
    ],
    xField: 'date',
    yField: 'value',
    seriesField: 'name',
    legend: {
      visible: true,
      position: 'bottom',
    },
  };

  return (
    <CartWrap title={title}>
      <Line {...config} />
    </CartWrap>
  );
};

export default MultipleLine;
