// @ts-ignore
/* eslint-disable */

declare namespace API {
    type OrderListItem = {
        id?: number;
        orderNo?: string; //订单编号
        orderName?: string; //订单名称
        payTime?: string; //支付时间
        decisionResults?: number; //决策结果 0拒绝 1通过 2人审
        tradeSerialNumber?: string; //交易流水号
        tradeAuthCode?: string; //交易授权号
        storeName?: string; //店铺名称
        payAmount?: string; //支付金额/USD
        riskScore?: string; //风险分
        payMthod?: string; //支付方式
        cardNo?: string; //卡号
        cardType?: string; //卡类型
        cardGroup?: string; //卡组
        cardBin?: string; //卡bin
        ip?: string; //ip
        device?: string; //设备ID
        payResults?: 0 | 1 | 2; //支付结果 0待支付 1成功 2失败
        currency?: string; //货币
        customerName?: string; //客户姓名
        customerPhone?: string; //客户手机
        customerEmail?: string; //客户邮箱
        customerAge?: number; //客户年龄
        billName?: string; //账单姓名
        billPhone?: string; //账单手机
        registerTime?: string; //注册时间
        receivingCountry?: string; //收货国家
        billCountry?: string; //账单国家
        ipCountry?: string; //Ip国家
        accountRegisterCountry?: string; //账户注册国家
        receivingCity?: string; //收货城市
        billCity?: string; //账单城市
        ipCity?: string;  //ip城市
        harvestAddress?: string; //收获地址
        billAddress?: string; //账单地址
        billZipCode?: string; //账单邮编
        goodsName?: string; //商品名称
        goodsNum?: number; //商品件数
        logisticsCost?: string; //物流费用
        logisticsType?: string; //物流类型
        source?: string; //网站来源
    }

    type OrderList = {
        data?: OrderListItem[]; 
        /** 列表的内容总数 */
        total?: number;
        success?: boolean;
    }
}