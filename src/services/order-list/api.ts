// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/getOrderList */
export async function getOrderList(
  params: {
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.OrderList>('/api/getOrderList', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
