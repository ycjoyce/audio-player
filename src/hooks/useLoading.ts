import { useState, Dispatch, SetStateAction } from "react";

/**
 * 控制 loading 狀態
 * @param init 初始值
 * @returns
 */
const useLoading = (
  init = false
): {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  handleLoadingStatus(delay?: number): () => void;
} => {
  const [loading, setLoading] = useState<boolean>(init);

  /**
   * 控制 loading 狀態
   * @param delay 延遲多少才要開始 loading（單位：毫秒）
   * @returns 用於清除 loading 的 function
   */
  const handleLoadingStatus = (delay = 500): (() => void) => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, delay);

    return () => {
      clearTimeout(timer);
      setLoading(false);
    };
  };

  return {
    loading,
    setLoading,
    handleLoadingStatus,
  };
};

export default useLoading;
