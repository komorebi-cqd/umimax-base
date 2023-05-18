import { Request, Response } from 'express';
import moment from 'moment';
import { parse } from 'url';

// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  const tableListDataSource: API.RuleListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      key: index,
      disabled: i % 6 === 0,
      href: 'https://ant.design',
      avatar: [
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      ][i % 2],
      name: `TradeCode ${index}`,
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: Math.floor(Math.random() * 1000),
      status: Math.floor(Math.random() * 10) % 4,
      updatedAt: moment().format('YYYY-MM-DD'),
      createdAt: moment().format('YYYY-MM-DD'),
      progress: Math.ceil(Math.random() * 100),
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

let tableListDataSource = genList(1, 100);

function getRule(req: Request, res: Response, u: string) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as API.PageParams &
    API.RuleListItem & {
      sorter: any;
      filter: any;
    };

  let dataSource = [...tableListDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );
  if (params.sorter) {
    const sorter = JSON.parse(params.sorter);
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      (Object.keys(sorter) as Array<keyof API.RuleListItem>).forEach((key) => {
        let nextSort = next?.[key] as number;
        let preSort = prev?.[key] as number;
        if (sorter[key] === 'descend') {
          if (preSort - nextSort > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (preSort - nextSort > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }
  if (params.filter) {
    const filter = JSON.parse(params.filter as any) as {
      [key: string]: string[];
    };
    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return (Object.keys(filter) as Array<keyof API.RuleListItem>).some((key) => {
          if (!filter[key]) {
            return true;
          }
          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }
          return false;
        });
      });
    }
  }

  if (params.name) {
    dataSource = dataSource.filter((data) => data?.name?.includes(params.name || ''));
  }
  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

function postRule(req: Request, res: Response, u: string, b: Request) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, name, desc, key } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;
    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newRule: API.RuleListItem = {
          key: tableListDataSource.length,
          href: 'https://ant.design',
          avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          ][i % 2],
          name,
          owner: '曲丽丽',
          desc,
          callNo: Math.floor(Math.random() * 1000),
          status: Math.floor(Math.random() * 10) % 2,
          updatedAt: moment().format('YYYY-MM-DD'),
          createdAt: moment().format('YYYY-MM-DD'),
          progress: Math.ceil(Math.random() * 100),
        };
        tableListDataSource.unshift(newRule);
        return res.json(newRule);
      })();
      return;

    case 'update':
      (() => {
        let newRule = {};
        tableListDataSource = tableListDataSource.map((item) => {
          if (item.key === key) {
            newRule = { ...item, desc, name };
            return { ...item, desc, name };
          }
          return item;
        });
        return res.json(newRule);
      })();
      return;
    default:
      break;
  }

  const result = {
    list: tableListDataSource,
    pagination: {
      total: tableListDataSource.length,
    },
  };

  res.json(result);
};


const getRandom = (max: number, min: number, digit?: number): string => {
  const roundom = Math.round(Math.random() * (max-min) + min);
  if(digit){
    if(roundom.toString().length < digit){
      return roundom.toString().padEnd(digit, '0')
    }else{
      return roundom.toString().slice(0,digit)
    }
  }

  return roundom.toString();
}

const getOrderListMethod = (current: number, pageSize: number) => {
  const tableList: API.OrderListItem[] = [];
  for (let i = 0; i < pageSize; i++) {
    tableList.push({
      id:i,
      orderNo: getRandom(100,1,11),
      orderName: '会员支付',
      payTime: moment().format('YYYY-MM-DD'),
      decisionResults: Math.floor( Math.random() * 100) % 3,
      tradeSerialNumber: getRandom(100,1,11),
      tradeAuthCode: getRandom(100,1,11),
      storeName: 'wetech云享家',
      payAmount: '22',
      riskScore: '99',
      payMthod: '支付宝',
      cardNo: getRandom(100,1,11),
      cardType: '',
      cardGroup: '',
      cardBin: '',
      ip: '192.168.0.0',
      device: getRandom(100,1,11),
      payResults: 1,
      currency: '美元',
      customerName: 'wetech',
      customerPhone: '13333333333',
      customerEmail: '13333333@gmail.com',
      customerAge: 24,
      billName: 'ccc',
      billPhone: '13333333333',
      registerTime: moment().format('YYYY-MM-DD'),
      receivingCountry: '中国',
      billCountry: '中国',
      ipCountry: '中国',
      accountRegisterCountry: '中国',
      receivingCity: '深圳',
      billCity: '深圳',
      ipCity: '深圳',
      harvestAddress: '深圳南山区',
      billAddress: '深圳南山区',
      billZipCode: '88888',
      goodsName: '华为手机',
      goodsNum: 66,
      logisticsCost: '99',
      logisticsType: '亚马逊',
      source: 'shopline',
    });
  }
  return tableList
};


const getOrderList = (req: Request, res: Response, u: string) => {
  const { current = 1, pageSize = 10 } = req.query;
  const result = {
    data: getOrderListMethod(current as number, pageSize as number),
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${current}`, 10) || 1,
  };

  return res.json(result);
}

export default {
  'GET /api/rule': getRule,
  'GET /api/getOrderList': getOrderList,
  'POST /api/rule': postRule,
};
