import React, { useMemo, useState } from 'react';
import { ExportOutlined, SyncOutlined, TableOutlined } from '@ant-design/icons';
import { Button, DatePicker, Dropdown, Tooltip } from 'antd';
import type { MenuProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

type DefaultHeadProps = {
  title?: string;
};

// 禁用今天之后的时间
// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  // Can not select days before today and today
  return current > dayjs().endOf('day');
};

// 日期预设
const rangePresets: {
  label: string;
  value: [Dayjs, Dayjs];
}[] = [
  { label: '今天', value: [dayjs().add(0, 'd'), dayjs()] },
  { label: '近7天', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: '近14天', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: '近30天', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: '近90天', value: [dayjs().add(-90, 'd'), dayjs()] },
];

const DefaultHead: React.FC<DefaultHeadProps> = ({ title = '表单数据' }) => {
  const [isTableModel, setIsTableModel] = useState<boolean>(false);

  const exportPng = () => {
    console.log('导出png');
  };

  const handleRefresh = () => {
    console.log('刷新操作');
  };

  const switchModel = () => {
    console.log('切换表格模式');
    setIsTableModel(!isTableModel);
  };

  const handleDateChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
    if (dates) {
      console.log(dates, dateStrings);
    } else {
      console.log('Clear');
    }
  };

  const items: MenuProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: <div onClick={exportPng}>Export PNG</div>,
      },
    ];
  }, []);

  return (
    <div className="flex justify-between items-center my-8">
      <div className=" text-xl text-neutral-600">{title}</div>
      <div className="flex items-center">
        <RangePicker onChange={handleDateChange} presets={rangePresets} disabledDate={disabledDate}/>

        <div className="flex items-center ml-10">
          <Tooltip title="刷新" trigger="hover" placement="bottomLeft">
            <Button
              className=" rounded-none rounded-s-[4px]"
              icon={<SyncOutlined />}
              onClick={handleRefresh}
            />
          </Tooltip>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button className=" rounded-none" icon={<ExportOutlined />} />
          </Dropdown>
          <Tooltip title="表格模式" trigger="hover" placement="bottomRight">
            <Button
              className=" rounded-none rounded-e-[4px]"
              type={isTableModel ? 'primary' : 'default'}
              icon={<TableOutlined />}
              onClick={switchModel}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default DefaultHead;
