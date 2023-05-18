import { addRule, removeRule } from '@/services/ant-design-pro/api';
import { getOrderList } from '@/services/order-list/api';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';




/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.OrderList) => {
  const hide = message.loading('正在添加');
  try {
    await addRule({ ...fields });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};



/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.OrderListItem[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;
  try {
    await removeRule({
      // key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

// 查询

const searchList = async (
  params: {
    current?: number;
    pageSize?: number;
  },
  options?: { [key: string]: any },
) => {
  console.log(params, options,'params, options');
  
  return await getOrderList(params, options);
};

const OrderTableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  // const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.OrderListItem>();
  const [selectedRowsState, setSelectedRows] = useState<API.OrderListItem[]>([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.OrderListItem>[] = [
    {
      title: (
        <FormattedMessage
          id="order.list.orderNo"
        />
      ),
      fixed: 'left',
      dataIndex: 'orderNo',
      render: (dom, entity) => {
        return (
          <a
            key='entity'
            onClick={() => {
              console.log(entity, 'entity:::');
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: <FormattedMessage id="order.list.orderName" />,
      dataIndex: 'orderName',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.payTime" />,
      dataIndex: 'payTime',
      valueType: 'dateTime',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.decisionResults" />,
      dataIndex: 'decisionResults',
      valueType: 'select',
      initialValue: [],
      valueEnum:{
          0: { text: '通过', status: 'Success' },
          1: { text: '拒绝', status: 'Error' },
          2: { text: '人审', status: 'Processing'},
      },
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.tradeSerialNumber" />,
      dataIndex: 'tradeSerialNumber',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.tradeAuthCode" />,
      dataIndex: 'tradeAuthCode',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.storeName" />,
      dataIndex: 'storeName',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.payAmount" />,
      dataIndex: 'payAmount',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.riskScore" />,
      dataIndex: 'riskScore',
      width: 120,
    },

    {
      title: <FormattedMessage id="order.list.payMthod" />,
      dataIndex: 'payMthod',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.cardNo" />,
      dataIndex: 'cardNo',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.cardType" />,
      dataIndex: 'cardType',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.cardGroup" />,
      dataIndex: 'cardGroup',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.cardBin" />,
      dataIndex: 'cardBin',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.ip" />,
      dataIndex: 'ip',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.device" />,
      dataIndex: 'device',
      width: 120,
    },
    {
      title: <FormattedMessage id="order.list.payResults" />,
      dataIndex: 'payResults',
      width: 120,
      hideInForm: true,
      valueEnum: {
        0: {
          text: (
            <FormattedMessage
              id="order.list.payResults.default"
            />
          ),
          status: 'Default',
        },
        1: {
          text: (
            <FormattedMessage id="order.list.payResults.success" />
          ),
          status: 'Success',
        },
        2: {
          text: (
            <FormattedMessage id="order.list.payResults.fail" />
          ),
          status: 'Error',
        },
      },
    },
    {
      title: <FormattedMessage id="order.list.currency" />,
      dataIndex: 'currency',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.customerName" />,
      dataIndex: 'customerName',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.customerPhone" />,
      dataIndex: 'customerPhone',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.customerEmail" />,
      dataIndex: 'customerEmail',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.customerAge" />,
      dataIndex: 'customerAge',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.billName" />,
      dataIndex: 'billName',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.billPhone" />,
      dataIndex: 'billPhone',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.registerTime" />,
      dataIndex: 'registerTime',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.receivingCountry" />,
      dataIndex: 'receivingCountry',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.billCountry" />,
      dataIndex: 'billCountry',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.ipCountry" />,
      dataIndex: 'ipCountry',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.accountRegisterCountry" />,
      dataIndex: 'accountRegisterCountry',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.receivingCity" />,
      dataIndex: 'receivingCity',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.billCity" />,
      dataIndex: 'billCity',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.ipCity" />,
      dataIndex: 'ipCity',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.harvestAddress" />,
      dataIndex: 'harvestAddress',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.billAddress" />,
      dataIndex: 'billAddress',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.billZipCode" />,
      dataIndex: 'billZipCode',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.goodsName" />,
      dataIndex: 'goodsName',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.goodsNum" />,
      dataIndex: 'goodsNum',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.logisticsCost" />,
      dataIndex: 'logisticsCost',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.logisticsType" />,
      dataIndex: 'logisticsType',
      width: 160,
    },
    {
      title: <FormattedMessage id="order.list.source" />,
      dataIndex: 'source',
      width: 160,
    },
  ];

  return (
    <>
      <ProTable<API.OrderListItem, API.PageParams>
        headerTitle={intl.formatMessage({
          //表头左上角标题
          id: 'pages.searchTable.title',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
          resetText: '重置搜索',
        }}
        // 右上角新建按钮
        // toolBarRender={() => [
        //   <Button
        //     type="primary"
        //     key="primary"
        //     onClick={() => {
        //       handleModalOpen(true);
        //     }}
        //   >
        //     <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
        //   </Button>,
        // ]}
        scroll={{x: 3800}}
        request={searchList} //请求方法
        columns={columns} //表头
        rowSelection={{
          //选择行
          onChange: (_, selectedRows) => {
            console.log(selectedRows, '选择行');
            setSelectedRows(selectedRows);
          },
        }}
      />
      {/* 选中之后底部渲染的操作 */}
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
              &nbsp;&nbsp;
            </div>
          }
        >
          {/* 批量删除 */}
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage
              id="pages.searchTable.batchDeletion"
              defaultMessage="Batch deletion"
            />
          </Button>
          {/* 批量审批按钮 */}
          <Button type="primary">
            <FormattedMessage
              id="pages.searchTable.batchApproval"
              defaultMessage="Batch approval"
            />
          </Button>
        </FooterToolbar>
      )}
      {/* 新建规则弹框 */}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.searchTable.createForm.newRule',
          defaultMessage: 'New rule',
        })}
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.OrderList);
          if (success) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.searchTable.ruleName"
                  defaultMessage="Rule name is required"
                />
              ),
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>
      {/* 规则配置弹框 */}
      {/* <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalOpen={updateModalOpen}
        values={currentRow || {}}
      /> */}
      {/* 右边弹框详情组件 */}
      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.orderNo && (
          <ProDescriptions<API.OrderList>
            column={2}
            title={currentRow?.orderNo}
            request={async (data) => {
              console.log(data, 'data');

              return { data: currentRow || {} };
            }}
            params={{
              id: currentRow?.orderNo,
            }}
            columns={columns as ProDescriptionsItemProps<API.OrderList>[]}
          />
        )}
      </Drawer>
      </>
  );
};

export default OrderTableList;
