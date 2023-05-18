import { Line } from '@ant-design/plots';
import React from 'react';
import CartWrap from './CartWrap';

const TestDome: React.FC = () => {
  const data = [
    {
      year: '2023-05-12',
      value: 0,
    },
    {
      year: '2023-05-13',
      value: 0,
    },
    {
      year: '2023-05-14',
      value: 5,
    },
    {
      year: '2023-05-15',
      value: 4,
    },
    {
      year: '2023-05-16',
      value: 5,
    },
    {
      year: '2023-05-17',
      value: 6,
    },
    {
      year: '2023-05-18',
      value: 5,
    },
  ];

  const config: any = {
    data,
    yField: 'value',
    xField: 'year',
    yAxis: {
      grid: {
        visible: false,
      },
      line: {
        visible: true,
        style: {
          stroke: '#d1d1d1a6',
        },
      },
    },
    xAxis: {
      line: {
        visible: true,
        style: {
          stroke: '#d1d1d1a6',
        },
      },
    },
    tooltip: {
      customContent: (title: any, items: any) => {
        return (
          <>
            <h5 style={{ marginTop: 16 }}>{title}</h5>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item: any, index: any) => {
                const { name, value, color } = item;
                return (
                  <li
                    key={item.year}
                    className="g2-tooltip-list-item"
                    data-index={index}
                    style={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
                  >
                    <span className="g2-tooltip-marker" style={{ backgroundColor: color }}></span>
                    <span
                      style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between' }}
                    >
                      <span style={{ marginRight: 16 }}>{name}:111</span>
                      <span className="g2-tooltip-list-item-value">{value}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        );
      },
    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };

  return (
    <CartWrap>
      <Line {...config} />
    </CartWrap>
  );
};

export default TestDome;
