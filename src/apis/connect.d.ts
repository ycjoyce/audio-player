/**
 * 連接 napster api
 * @param url 要請求的url
 * @param type 請求類型
 * @param data 隨請求帶上的資料
 * @returns axios 實例
 */
declare const connect: (url?: string, type?: string, data?: {}) => Promise<any>;
export default connect;
