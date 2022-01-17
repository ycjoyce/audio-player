import { FC } from "react";
export interface TrackTitleProps {
    /** 曲目名稱 */
    name?: string;
    /** 曲目藝術家 */
    artist?: string;
    /** 專輯圖片 */
    img?: string;
}
/**
 * 曲目標題
 * @param param0
 * @returns
 */
declare const TrackTitle: FC<TrackTitleProps>;
export default TrackTitle;
