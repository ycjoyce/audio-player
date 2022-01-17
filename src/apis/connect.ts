import axios, { AxiosRequestHeaders } from "axios";

interface Header extends AxiosRequestHeaders {
  /** 私鑰 */
  apikey: string;
}

/** napster api 網址 */
const baseURL = "https://api.napster.com";

/**
 * 連接 napster api
 * @param url 要請求的url
 * @param type 請求類型
 * @param data 隨請求帶上的資料
 * @returns axios 實例
 */
const connect = (url = "", type = "GET", data = {}): Promise<any> => {
  const connectType = type.toUpperCase();
  const config: { baseURL: string; headers: Header } = {
    baseURL,
    headers: {
      apikey: process.env.API_KEY || "",
      "Content-Type": "application/json",
    },
  };
  const instance = axios.create(config);

  switch (connectType) {
    case "GET":
      return instance.get(url, { params: data });
    case "POST":
      return instance.post(url, data);
    default:
      return Promise.reject();
  }
};

export default connect;
