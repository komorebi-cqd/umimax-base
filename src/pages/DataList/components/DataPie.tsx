import { Pie } from '@ant-design/plots';
import type {PieConfig} from '@ant-design/plots';
import { isEqual } from 'lodash';
import React, { memo } from 'react';
import CartWrap, { CartWrapProps } from './CartWrap';

type DataPieProps = CartWrapProps & {
  data: any,
  onReady: any
}

const DataPie: React.FC<DataPieProps> = memo(
  ({ data, onReady, title }) => {
    const config: PieConfig = {
      data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      innerRadius: 0.6,
      label: { type: 'outer' },
      interactions: [{ type: 'element-active' }],
      onReady,
      padding: 'auto',
      statistic: {
        title: {
          formatter: () => {
            return ''
          }
        },
        content: {
          formatter: () => {
            return ''
          }
        }
      },
      // meta: {
      //   type: {
      //     alias: '分类',
      //     range: [0, 1],
      //   },
      //   value: {
      //     alias: '数量',
      //     formatter: (v: any) => {
      //       return `${v}人`;
      //     },
      //   },
      // },
    };

    return <CartWrap title={title}><Pie {...config} /></CartWrap> ;
  },
  (pre, next) => {
    return isEqual(pre?.data, next?.data);
  },
);

export default DataPie;
