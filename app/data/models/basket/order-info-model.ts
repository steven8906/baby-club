export default interface OrderInfoModel{
    basketProductList : Array<number | string>;
    date              : Date;
    deliveryMan       : string;
    customerAddress   : string;
}