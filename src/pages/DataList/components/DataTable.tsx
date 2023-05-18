import { Table, Tag } from 'antd';
import React from 'react';
import CartWrap, { CartWrapProps } from './CartWrap';
const { Column } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park231222222222222',
    tags: ['cool', 'teacher'],
  },
];

const DataTable: React.FC<CartWrapProps> = ({ title }) => (
  <CartWrap title={title} >
    <Table dataSource={data} pagination={false} scroll={{ x: 'max-content', y: '10rem' }} bordered={true}>
      <Column width={150} title="firstName" dataIndex="firstName" key="firstName" />
      <Column width={150} title="lastName" dataIndex="lastName" key="lastName" />
      <Column width={150} title="Age" dataIndex="age" key="age" />
      <Column width={150} title="Address" dataIndex="address" key="address" />
      <Column
        width={150}
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={(tags: string[]) => (
          <>
            {tags.map((tag) => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
    </Table>
  </CartWrap>
);

export default DataTable;
