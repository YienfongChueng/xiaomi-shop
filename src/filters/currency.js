export const currency = (val) => {
    if (!val) return '0.00';
    return `¥${val.toFixed(2)}元`;
};
