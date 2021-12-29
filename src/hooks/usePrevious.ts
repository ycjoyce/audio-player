import { useRef, useEffect } from "react";

/**
 * 取得傳進來的 value 上一個 render 時的值
 * @param value
 * @returns 傳進來的 value 上一個 render 時的值
 */
function usePrevious(value: any): any {
  const prev = useRef();
  useEffect(() => {
    prev.current = value;
  });
  return prev.current;
}

export default usePrevious;
