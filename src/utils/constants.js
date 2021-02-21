// 支付方式
export const payType = [
    { label: '支付宝', value: 1 },
    { label: '微信', value: 2 },
];

// 订单状态:0-已取消-10-未付款，20-已付款，40-已发货，50-交易成功，60-交易关闭
export const orderStatus = [
    { label: '已取消', value: 0 },
    { label: '未付款', value: 10 },
    { label: '已付款', value: 20 },
    { label: '已发货', value: 40 },
    { label: '交易成功', value: 50 },
    { label: '交易关闭', value: 60 },
];
