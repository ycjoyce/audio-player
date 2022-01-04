import React, { RefObject, useEffect } from "react";

/**
 * 偵測目標物外部的點擊事件
 * @param ref 目標物
 * @param cb 點擊外部的 callback 函數
 */
function useClickOutside(ref: RefObject<any>, cb: () => void = () => {}): void {
  useEffect(() => {
    /**
     * 處理外部點擊事件
     * @param e
     */
    const handleClickOutside = (e: MouseEvent): void => {
      // 如果點擊目標物外部，就執行 callback 函數
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

export default useClickOutside;
