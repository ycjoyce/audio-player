import { RefObject } from "react";
/**
 * 偵測目標物外部的點擊事件
 * @param ref 目標物
 * @param cb 點擊外部的 callback 函數
 */
declare const useClickOutside: (ref: RefObject<any>, cb?: () => void) => void;
export default useClickOutside;
