import { Dispatch, SetStateAction } from "react";
/**
 * 控制 loading 狀態
 * @param init 初始值
 * @returns
 */
declare const useLoading: (init?: boolean) => {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    handleLoadingStatus(delay?: number | undefined): () => void;
};
export default useLoading;
